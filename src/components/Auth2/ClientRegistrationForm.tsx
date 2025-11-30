// components/Auth/ClientRegistrationForm.tsx (FASE 2: Client Component + Server Action)

"use client";

import { useFormState, useFormStatus } from "react-dom";
import { registerClient, AuthState } from "@/app/auth/actions";
// Importações de componentes shadcn/ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, UserPlus } from "lucide-react";

/**
 * Botão de Submissão com feedback de carregamento (useFormStatus).
 */
function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button 
            type="submit" 
            className="w-full mt-4" 
            disabled={pending}
        >
            {pending ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
                <UserPlus className="mr-2 h-5 w-5" />
            )}
            {pending ? "Cadastrando..." : "Cadastrar"}
        </Button>
    );
}

const initialState: AuthState = {
    status: "idle",
    message: "",
};

/**
 * Formulário de Cadastro de Cliente Integrado com Server Actions.
 */
export function ClientRegistrationForm() {
    const [state, formAction] = useFormState(registerClient, initialState);

    return (
        <div className="bg-white p-6 shadow-xl rounded-xl border border-gray-100">
            {state.status === "error" && (
                <Alert variant="destructive" className="mb-4">
                    <AlertDescription className="font-medium">
                        {state.message}
                    </AlertDescription>
                </Alert>
            )}

            <form action={formAction} className="space-y-4">
                {/* Nome */}
                <div className="space-y-1">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" name="name" type="text" required placeholder="Seu Nome Aqui" />
                    {state.fieldErrors?.name && (
                        <p className="text-xs text-red-500">{state.fieldErrors.name[0]}</p>
                    )}
                </div>
                
                {/* Email */}
                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
                    {state.fieldErrors?.email && (
                        <p className="text-xs text-red-500">{state.fieldErrors.email[0]}</p>
                    )}
                </div>
                
                {/* Senha */}
                <div className="space-y-1">
                    <Label htmlFor="password">Senha (Mínimo 8 caracteres)</Label>
                    <Input id="password" name="password" type="password" required placeholder="••••••••" minLength={8} />
                    {state.fieldErrors?.password && (
                        <p className="text-xs text-red-500">{state.fieldErrors.password[0]}</p>
                    )}
                </div>
                
                {/* Confirmação de Senha */}
                <div className="space-y-1">
                    <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                    <Input id="confirmPassword" name="confirmPassword" type="password" required placeholder="••••••••" minLength={8} />
                    {state.fieldErrors?.confirmPassword && (
                        <p className="text-xs text-red-500">{state.fieldErrors.confirmPassword[0]}</p>
                    )}
                </div>
                
                <SubmitButton />
            </form>
        </div>
    );
}