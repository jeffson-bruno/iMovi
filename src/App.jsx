import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-50">
          {/* Navbar */}
          <Navbar />
        
        {/* Conteúdo da página inicial */}
        <main className="flex-grow p-8 w-full mx-auto">
          <h1 className="text-4xl font-extrabold mb-6">Bem-vindo à iMovi Imobiliária</h1>
          <p className="text-lg text-gray-600">
            Aqui você encontra os melhores imóveis para você e sua família.
          </p>
          {/* Depois a gente pode colocar uma galeria de fotos ou banner */}
        </main>
      </div>
    </>
  )
}

export default App
