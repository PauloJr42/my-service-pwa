import { ClientRegistrationForm } from "@/components/Auth2/ClientRegistrationForm";
import Link from "next/link";

/**
 * Renders the Client Registration page. (Server Component)
 */
export default function ClientRegistrationPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Crie sua Conta
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Cadastro rápido para Clientes
                    </p>
                </div>
                
                <ClientRegistrationForm />

                <p className="mt-4 text-center text-sm text-gray-600">
                    Já possui conta?{" "}
                    <Link 
                        href="/auth/login" 
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150"
                    >
                        Faça login
                    </Link>
                </p>
            </div>
        </div>
    );
}