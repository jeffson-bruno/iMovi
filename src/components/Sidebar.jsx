import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

export function Sidebar({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay translúcido com blur */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        onClick={handleClose}
      />

      {/* Sidebar com largura maior e transição */}
      <div
        className={clsx(
          'relative h-full bg-white shadow-lg overflow-y-auto transition-transform duration-300',
          'w-3/4 sm:w-2/3 md:w-1/2 lg:w-[30%]',
          isVisible ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Botão de fechar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
        >
          ✕
        </button>

        <div className="p-6 space-y-6">
          <SidebarSection
            title="Imóveis"
            items={[
              'Cadastre seu Imóvel',
              'Encomende seu Imóvel',
              'Locação por Temporada',
            ]}
          />

          <SidebarSection
            title="Serviços"
            items={[
              'Cadastro de Locatário',
              'Avalie seu Corretor',
              'Corretores',
              'Cadastro de Proposta',
            ]}
          />

          <SidebarSection
            title="Institucional"
            items={[
              'Fale Conosco',
              'Faça Parte',
              'Política de Privacidade',
              'Quem Somos',
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function SidebarSection({ title, items }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2 text-blue-700">{title}</h2>
      <ul className="space-y-1 text-gray-700">
        {items.map((item, index) => (
          <li
            key={index}
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
