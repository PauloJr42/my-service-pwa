/**
 * Página Principal do Dashboard (dentro do layout /app/layout.tsx).
 * (Server Component)
 */
export default function DashboardPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Dashboard do Cliente
            </h2>
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