// lib/supabase/server.ts
// ...existing code...
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers' 
import { env } from '@/lib/env'

/**
 * Cria um cliente Supabase para Server Components e Server Actions.
 */
export function createServerActionClient() {
  const cookieStore = cookies()
  
  // 🚨 LINHA CRÍTICA DE DIAGNÓSTICO 🚨
  // VERIFICA SE O SUPABASE_JWT_SECRET ESTÁ SENDO LIDO PELO AMBIENTE
  console.log("STATUS DO JWT SECRET:", env.SUPABASE_JWT_SECRET ? "CARREGADO COM SUCESSO" : "ERRO: CHAVE DE AMBIENTE NÃO CARREGADA");
  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL!,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          const store = await cookies()
          return store.get(name)?.value ?? null
        },
        async set(name: string, value: string, options: CookieOptions) {
          const store = await cookies()
          // cast para any para contornar typing diferentes entre versões do Next
          ;(store as any).set?.({ name, value, ...options })
        },
        async remove(name: string, options: CookieOptions) {
          const store = await cookies()
          // prefira delete quando disponível
          if ((store as any).delete) {
            ;(store as any).delete(name)
          } else {
            ;(store as any).set?.({ name, value: '', ...options })
          }
        },
      },
      global: {
        fetch: (input: RequestInfo | URL, init?: RequestInit) =>
          fetch(input, { ...init, cache: 'no-store' }),
      },
    }
  )
}
// ...existing code...