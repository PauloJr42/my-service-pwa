// lib/schemas.ts

import { z } from 'zod';

// --- Esquema de Cadastro (Register) ---
// Usado na Server Action registerClient
export const RegisterSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Formato de email inválido."),
  phone: z.string().min(10, "O telefone deve ter pelo menos 10 dígitos (DDD + Número).").max(15, "O telefone é muito longo.").optional(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
});

// --- Esquema de Login (Login) ---
// Usado na Server Action loginClient
export const LoginSchema = z.object({
  email: z.string().email("Formato de email inválido."),
  password: z.string().min(1, "A senha é obrigatória."),
});

// Tipagem para uso no frontend/forms
export type RegisterFormValues = z.infer<typeof RegisterSchema>;
export type LoginFormValues = z.infer<typeof LoginSchema>;