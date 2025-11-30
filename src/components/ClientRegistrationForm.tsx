// components/ClientRegistrationForm.tsx

// **Nenhum import de componente customizado é necessário.**

export function ClientRegistrationForm() {
    return (
        // Substituindo o Card com um <div> estilizado para ter a mesma aparência profissional
        <div className="w-full max-w-sm mx-auto p-8 border border-gray-200 bg-white rounded-xl shadow-2xl transition-all duration-300 hover:shadow-primary/20">
            
            {/* Cabeçalho */}
            <header className="text-center mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Cadastro de Cliente
                </h1>
                <p className="text-sm text-gray-500 mt-2">
                    Crie sua conta para começar a usar o sistema IMR.
                </p>
            </header>
            
            {/* Formulário */}
            <form 
                // Ação e lógica de estado omitidas para máxima simplicidade.
                className="grid gap-6"
            >
                
                {/* Campo Nome */}
                <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Nome Completo
                    </label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="Seu Nome" 
                        required 
                        // Estilos de Input do shadcn/ui aplicados via Tailwind
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>

                {/* Campo Email */}
                <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                    </label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="contato@exemplo.com" 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>

                {/* Campo Senha */}
                <div className="grid gap-2">
                    <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Senha
                    </label>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>
                
                {/* Botão de Submissão */}
                <button 
                    type="submit" 
                    // Estilos de Botão do shadcn/ui/Button (Primary)
                    className="w-full mt-4 h-12 text-lg font-bold inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                    Cadastrar
                </button>
            </form>

        </div>
    );
}

// Nota: A variável 'primary' do Tailwind é definida no arquivo global CSS e é a chave para a cor de destaque.