import { LoginForm } from "@/components/Auth2/LoginForm";
import Link from "next/link";

/**
 * Renders the Login page. (Server Component)
 */
export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
            <div className="w-full max-w-sm">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Bem-vindo(a) ao IMR
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Acesse sua conta de Cliente
                    </p>
                </div>
                
                <LoginForm />

                <p className="mt-4 text-center text-sm text-gray-600">
                    Não tem conta?{" "}
                    <Link 
                        href="/auth/cadastro/cliente" 
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150"
                    >
                        Cadastre-se aqui
                    </Link>
                </p>
            </div>
        </div>
    );
}