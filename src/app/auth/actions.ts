// app/auth/actions.ts

'use server';

import { redirect } from 'next/navigation';
// 🚨 Importação CRUCIAL para tratar o throw do redirect()
import { isRedirectError } from 'next/dist/client/components/redirect'; 
import { ZodError } from 'zod';
import { createServerActionClient } from '@/lib/supabase/server'; 
import { RegisterSchema, LoginSchema } from '@/lib/schemas'; // Assumindo que você tem LoginSchema também

// ====================================================================
// DEFINIÇÃO DE TIPOS (AuthState) - O que estava faltando/comentado
// ====================================================================

/**
 * Define o tipo de objeto que a Server Action retorna.
 */
export type AuthState = {
  status: 'success' | 'error' | 'idle';
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

const initialState: AuthState = {
    status: 'idle',
    message: '',
};

// ====================================================================
// 1. REGISTER CLIENT (Cadastro)
// ====================================================================

/**
 * Server Action: Cadastro de Cliente
 * Tenta cadastrar o usuário e faz o redirecionamento em caso de sucesso.
 */
export async function registerClient(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const data = Object.fromEntries(formData.entries());

  try {
    const validatedData = RegisterSchema.parse(data);
    const supabase = createServerActionClient();

    // Tenta fazer o sign-up (criação e autenticação)
    const { data: authData, error: signUpError } = await supabase.auth.signUp({ 
      email: validatedData.email,
      password: validatedData.password,
      options: {
        data: { full_name: validatedData.name, role: 'client'},
      },
    });

    if (signUpError) {
        // Se falha na validação do Supabase (ex: email já existe)
        console.error("--- ERRO SUPABASE (SIGN UP) ---", signUpError.message);
        return { 
            status: "error", 
            message: signUpError.message.includes("already registered") 
                ? "Este email já está cadastrado. Tente fazer login." 
                : "Erro no cadastro. Por favor, tente novamente.",
        };
    }
    
    // Sucesso: Usuário criado e logado. Redireciona para o Dashboard.
    return redirect("/dashboard");

  } catch (err) {
    
    // 🚨 TRATAMENTO CRÍTICO: Não capture o throw do redirect()
    if (isRedirectError(err)) {
      throw err; // Re-lança para que o Next.js complete o redirecionamento.
    }
    
    // Trata erros de validação Zod (frontend)
    if (err instanceof ZodError) {
      const fieldErrors = err.flatten().fieldErrors as Record<string, string[]>;
      return { status: "error", message: "Erro de validação. Verifique os campos.", fieldErrors };
    }
    
    // Tratamento de erros inesperados (ambiente, etc.)
    console.error("--- ERRO INESPERADO FATAL NA SERVER ACTION (REGISTER) ---", err);
    
    return { status: "error", message: "Ocorreu um erro inesperado no servidor. Tente mais tarde." };
  }
}

// ====================================================================
// 2. LOGIN CLIENT (Login) - (Para fins de tipagem completa)
// ====================================================================

/**
 * Server Action: Login de Cliente
 * Tenta fazer o login e redireciona.
 */
export async function loginClient(
    prevState: AuthState,
    formData: FormData
): Promise<AuthState> {
    const data = Object.fromEntries(formData.entries());

    try {
        const validatedData = LoginSchema.parse(data);
        const supabase = createServerActionClient();

        const { error: signInError } = await supabase.auth.signInWithPassword({
            email: validatedData.email,
            password: validatedData.password,
        });

        if (signInError) {
            console.error("--- ERRO SUPABASE (SIGN IN) ---", signInError.message);
            return {
                status: 'error',
                message: "Email ou senha inválidos. Tente novamente.",
            };
        }

        // Sucesso: Usuário autenticado. Redireciona.
        return redirect("/dashboard");

    } catch (err) {
        if (isRedirectError(err)) {
            throw err;
        }

        if (err instanceof ZodError) {
            const fieldErrors = err.flatten().fieldErrors as Record<string, string[]>;
            return { status: "error", message: "Erro de validação. Verifique os campos.", fieldErrors };
        }

        console.error("--- ERRO INESPERADO FATAL NA SERVER ACTION (LOGIN) ---", err);
        return { status: "error", message: "Ocorreu um erro inesperado no servidor. Tente mais tarde." };
    }
}

// ====================================================================
// 3. LOGOUT CLIENT (Sair)
// ====================================================================

/**
 * Server Action: Finaliza a sessão do usuário.
 */
export async function logout() {
    'use server';
    const supabase = createServerActionClient();

    await supabase.auth.signOut();

    // Redireciona para a página de login
    return redirect("/auth/login");
}