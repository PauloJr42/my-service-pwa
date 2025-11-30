// app/page.tsx

import { redirect } from 'next/navigation';

/**
 * Página inicial (/) que redireciona o usuário para a rota de autenticação.
 * Isso garante que a rota raiz não tente carregar lógica pesada ou recorrente.
 */
export default function LoginPage() {
  // Redireciona de forma imperativa. Isso não inicia a serialização de componentes.
  redirect('/auth/login');
}