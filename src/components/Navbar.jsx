import React, { useState } from 'react';
import { Sidebar } from './Sidebar';

export function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700 cursor-pointer">
          iMovi
        </div>

        {/* Botão do menu hamburguer SEM restrição de largura */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu Desktop (remover se só usar sidebar) */}
        {/* 
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 cursor-pointer">Sobre</li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 cursor-pointer">Entre em Contato</li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 cursor-pointer">Imóveis</li>
        </ul>
        */}
      </nav>

      {/* Sidebar */}
      {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
    </>
  );
}
