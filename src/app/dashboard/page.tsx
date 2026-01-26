import { logout } from '@/app/auth/actions'; // Ajuste o caminho conforme sua estrutura
import { LogOut } from 'lucide-react'; // Sugestão de ícone (opcional)

/**
 * Página Principal do Dashboard
 * (Server Component)
 */
export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Dashboard do Cliente
                </h2>

                {/* Botão de Logout usando Server Action */}
                <form action={logout}>
                    <button 
                        type="submit"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200"
                    >
                        <LogOut size={18} />
                        Sair da Conta
                    </button>
                </form>
            </div>

            <div className="bg-white p-6 shadow-xl rounded-xl border border-gray-100">
                <p className="text-gray-600">
                    Bem-vindo(a)! Sua área de cliente no IMR está pronta.
                </p>
                
                <div className="mt-4 p-4 border border-dashed rounded-lg text-gray-500">
                    Placeholder para o conteúdo principal, como status de serviços e notificações.
                </div>
            </div>
        </div>
    );
}