// components/Auth/LoginForm.tsx (FASE 2: Client Component + Server Action)

"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginClient, AuthState } from "@/app/auth/actions";
// Importações de componentes shadcn/ui (para uma interface profissional)
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, LogIn } from "lucide-react";

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
                <LogIn className="mr-2 h-5 w-5" />
            )}
            {pending ? "Entrando..." : "Entrar"}
        </Button>
    );
}

const initialState: AuthState = {
    status: "idle",
    message: "",
};

/**
 * Formulário de Login Integrado com Server Actions via useFormState.
 */
export function LoginForm() {
    const [state, formAction] = useFormState(loginClient, initialState);

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
                {/* Email */}
                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className={state.fieldErrors?.email ? "border-red-500" : ""}
                    />
                </div>
                
                {/* Senha */}
                <div className="space-y-1">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="••••••••"
                        className={state.fieldErrors?.password ? "border-red-500" : ""}
                    />
                </div>
                
                <SubmitButton />
            </form>
        </div>
    );
}