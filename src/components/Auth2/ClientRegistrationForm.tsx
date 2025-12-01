"use client";

import { useFormState, useFormStatus } from "react-dom";
import { registerClient, AuthState } from "@/app/auth/actions";
import * as React from 'react'; // 🚨 Necessário para useState

// Importações de componentes shadcn/ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, UserPlus, Eye, EyeOff, CheckCheck } from "lucide-react"; // Adicionado CheckCheck

// ====================================================================
// COMPONENTE AUXILIAR 1: Password Input com Toggle
// ====================================================================

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label: string;
}

function PasswordInput({ id, name, required, placeholder, minLength, error, label }: PasswordInputProps) {
    const [showPassword, setShowPassword] = React.useState(false);
    
    return (
        <div className="space-y-1">
            <Label htmlFor={id}>{label}</Label>
            <div className="relative">
                <Input
                    id={id}
                    name={name}
                    type={showPassword ? 'text' : 'password'}
                    required={required}
                    placeholder={placeholder}
                    minLength={minLength}
                    className="pr-10" // Adiciona padding para o botão não sobrepor
                />
                
                {/* Botão de Toggle */}
                <Button
                    type="button" // CRÍTICO: Evita enviar o formulário
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    ) : (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                    )}
                </Button>
            </div>
            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}
        </div>
    );
}


// ====================================================================
// COMPONENTE AUXILIAR 2: Botão de Submissão
// ====================================================================

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

// ====================================================================
// COMPONENTE PRINCIPAL: ClientRegistrationForm
// ====================================================================

export function ClientRegistrationForm() {
    const [state, formAction] = useFormState(registerClient, initialState);

    return (
        <div className="bg-white p-6 shadow-xl rounded-xl border border-gray-100">
            
            {/* 🚨 Mensagem de SUCESSO (Confirmação de Email) 🚨 */}
            {state.status === "success" && (
                <Alert className="mb-4 bg-green-50 text-green-700 border-green-300">
                    <CheckCheck className="h-4 w-4 text-green-700" />
                    
                    <AlertDescription className="text-green-700">
                        {state.message}
                    </AlertDescription>
                </Alert>
            )}

            {/* Mensagem de ERRO */}
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
                
                {/* 🚨 NOVO CAMPO: TELEFONE 🚨 */}
                <div className="space-y-1">
                    <Label htmlFor="phone">Telefone (DDD + Número)</Label>
                    <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" // Tipo 'tel' para melhor experiência mobile
                        required 
                        placeholder="(99) 99999-9999" 
                    />
                    {state.fieldErrors?.phone && (
                        <p className="text-xs text-red-500">{state.fieldErrors.phone[0]}</p>
                    )}
                </div>
                
                {/* Senha (Utiliza o novo componente com Toggle) */}
                <PasswordInput
                    id="password" 
                    name="password" 
                    label="Senha (Mínimo 8 caracteres)"
                    placeholder="••••••••" 
                    minLength={8} 
                    required
                    error={state.fieldErrors?.password ? state.fieldErrors.password[0] : undefined}
                />
                
                {/* Confirmação de Senha (Utiliza o novo componente com Toggle) */}
                <PasswordInput
                    id="confirmPassword" 
                    name="confirmPassword" 
                    label="Confirmar Senha"
                    placeholder="••••••••" 
                    minLength={8} 
                    required
                    error={state.fieldErrors?.confirmPassword ? state.fieldErrors.confirmPassword[0] : undefined}
                />
                
                <SubmitButton />
            </form>
        </div>
    );
}