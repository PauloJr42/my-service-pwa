'use client';

import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';
// ⚠️ Altere estes paths se seus componentes Input/Button estiverem em outro lugar
import { Input } from '@/components/ui/input'; 
import { Button } from '@/components/ui/button'; 

// Props que o componente aceita, mais o erro da Server Action
interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

/**
 * Componente de Input de Senha que permite mostrar/esconder o texto.
 */
export function PasswordInput({ error, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        // Alterna entre 'password' e 'text'
        type={showPassword ? 'text' : 'password'}
        className="pr-10" // Adiciona padding para o botão não sobrepor o texto
      />
      
      {/* Botão de Toggle */}
      <Button
        type="button" // CRÍTICO: Não deve ser 'submit'
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={props.disabled}
      >
        {/* Alterna o ícone */}
        {showPassword ? (
          <Eye className="h-4 w-4 text-muted-foreground" />
        ) : (
          <EyeOff className="h-4 w-4 text-muted-foreground" />
        )}
      </Button>
      
      {/* Exibe o erro de validação (do useFormState) */}
      {error && (
          <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}