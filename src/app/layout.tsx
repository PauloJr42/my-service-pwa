// app/layout.tsx

import { Inter } from 'next/font/google'; 
import './globals.css'; 
import { cn } from '@/lib/utils'; // Garante que a classe de utilidade seja importada

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans', 
});

export const metadata = {
  title: "IMR | The Modern Indie Stack",
  description: "Web App Mobile-First de alto desempenho.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Usa 'cn' para aplicar a classe da fonte
    <html lang="pt-BR" className={cn(
        "min-h-screen bg-white antialiased",
        inter.variable
    )}>
      <body>
        {children}
      </body>
    </html>
  );
}