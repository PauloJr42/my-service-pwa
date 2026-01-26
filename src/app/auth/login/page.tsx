"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Webhook, 
  Activity, 
  Menu, 
  X, 
  ChevronDown, 
  Database, 
  Globe 
} from "lucide-react";
import Link from "next/link";

// Importação do seu componente de lógica original
import { LoginForm } from "@/components/Auth2/LoginForm";

export default function IMRPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-8"
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            IMR SERVIÇOS
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#tecnologia" className="hover:text-white transition-colors">Tecnologia</a>
            <button className="px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-blue-400 transition-all">
              Suporte
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- SEÇÃO 1: LOGIN FULL SCREEN (Hero imersivo) --- */}
      <section id="tecnologia" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background Estilizado (Visual da Landing Page) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Branding de Impacto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm">Service Intelligence</span>
            <h1 className="text-7xl font-black mt-4 leading-[1.1]">
              Sua Maquina <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Conectada.
              </span>
            </h1>
            <p className="text-gray-500 text-xl mt-6 max-w-md leading-relaxed">
              Acesse a plataforma de monitoramento e gestão de ativos IMR Serviços. Performance em tempo real para sua infraestrutura.
            </p>
          </motion.div>

          {/* Lado Direito: O Bloco de Login Expandido */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="bg-[#111] border border-white/10 p-10 rounded-[3rem] shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] backdrop-blur-2xl">
              <div className="text-center mb-8">
                <div className="inline-block p-4 rounded-2xl bg-blue-600/10 mb-4">
                  <Webhook className="text-blue-500" size={32} />
                </div>
                <h2 className="text-3xl font-bold">Área do Cliente</h2>
                <p className="text-gray-500 mt-2">Identifique-se para gerenciar seus sistemas</p>
              </div>

              {/* AQUI ENTRA SUA FUNCIONALIDADE DE LOGIN */}
              <div className="modern-login-container [&_input]:text-black">
                <LoginForm />
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <Link href="/auth/cadastro/cliente" className="text-sm font-semibold text-blue-400 hover:text-emerald-400 transition-colors">
                  Não tem conta? Cadastre-se aqui.
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indicador de "Scroll para ver mais" */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Descobrir Serviços</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* --- SEÇÃO 2: SERVIÇOS (Empurrada para baixo) --- */}
      <section id="servicos" className="relative z-10 py-32 bg-[#0d0d0d]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Soluções de Engenharia <br/> & Automação</h2>
              <p className="text-gray-500 text-lg">Unimos a teoria de Luger (IA) com a prática de Oliveira (IoT) para criar sistemas resilientes.</p>
            </div>
            <div className="text-8xl font-black text-white/5 hidden lg:block">SERVICES</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              icon={Activity} 
              title="Monitoramento em Tempo Real" 
              desc="Dashboards customizados para protocolos MQTT e HTTP com ESP8266."
            />
            <Card 
              icon={Shield} 
              title="Cibersegurança Industrial" 
              desc="Proteção de dados e redundância para infraestruturas críticas."
            />
            <Card 
              icon={Database} 
              title="Inteligência de Dados" 
              desc="Transformamos telemetria bruta em relatórios analíticos preditivos."
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 border-t border-white/5 text-center bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-3xl font-bold mb-8 opacity-50">IMR SERVIÇOS</div>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Técnico responsavél Paulo Júnior (Mecatrônica). 2026 © Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Subcomponente de Card Estilizado
function Card({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="group p-10 rounded-[2rem] bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-500">
      <div className="w-14 h-14 rounded-2xl bg-blue-600/5 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500">
        <Icon className="text-blue-500 group-hover:text-white" size={28} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}