// src/config/env.ts

/**
 * Arquivo de configuração de ambiente para garantir que o TypeScript
 * reconheça as variáveis e que elas estejam disponíveis.
 */
export const env = {
  // Variáveis Públicas (NEXT_PUBLIC_)
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

  // Variável Secreta (Servidor Apenas)
  SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET,
};

// Verificação simples (runtime check) para variáveis críticas
if (!env.SUPABASE_JWT_SECRET) {
  // Lança um erro para o desenvolvedor se a chave crítica estiver faltando
  console.error("ERRO CRÍTICO: Variável de ambiente SUPABASE_JWT_SECRET não está definida.");
  process.exit(1); 
}