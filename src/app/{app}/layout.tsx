// app/app/layout.tsx

/**
 * Layout do Dashboard para rotas autenticadas (/app/*).
 * Estrutura Responsive: Sidebar (Desktop) + Header (Mobile/Desktop) + Conteúdo Principal.
 * Não inclui lógica de estado da Sidebar (Client Component), apenas markup.
 */
export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* 1. Sidebar - Visível apenas em Telas Grandes (Desktop) */}
            <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 border-r border-gray-200 bg-white shadow-lg">
                <div className="flex h-16 shrink-0 items-center px-4">
                    {/* Logo Premium */}
                    <span className="text-2xl font-extrabold tracking-tight text-indigo-600">IMR</span>
                </div>
                <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
                    <div className="space-y-1">
                        {/* Itens de Navegação (Placeholder) */}
                        <a href="#" className="flex items-center p-2 text-sm font-semibold text-indigo-600 rounded-lg bg-indigo-50">Início</a>
                        <a href="#" className="flex items-center p-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition">Serviços</a>
                        <a href="#" className="flex items-center p-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition">Perfil</a>
                    </div>
                </nav>
            </aside>

            <div className="flex flex-1 flex-col md:pl-64">
                {/* 2. Header (Barra Superior) */}
                <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    {/* Botão Menu Mobile (Visível apenas em Mobile) */}
                    <button type="button" className="p-2.5 text-gray-700 md:hidden">
                        {/* Icone Menu */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </button>
                    
                    <div className="flex-1 text-base font-semibold text-gray-900 md:hidden">
                        IMR - Menu
                    </div>

                    <div className="flex items-center gap-x-4 sm:gap-x-6 ml-auto">
                        {/* Placeholder para Perfil/Notificações */}
                        <div className="relative">
                            <span className="sr-only">Menu do Usuário</span>
                            <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-medium text-white border-2 border-white shadow-md cursor-pointer">
                                PV
                            </div>
                        </div>
                    </div>
                </header>

                {/* 3. Conteúdo Principal */}
                <main className="flex-1 py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
                    {children}
                </main>
            </div>
        </div>
    );
}