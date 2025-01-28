import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-full">
        {/* Imagen de fondo */}
        <div
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('https://imgur.com/6wGwJLp.jpg')" }}
        >
          {/* Capa oscura encima de la imagen */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Contenido encima de la imagen */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Bienvenido a Mi Página</h1>
            <p className="text-xl mb-6">Aquí va una pequeña descripción de lo que hacemos.</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600">
              ¡Comienza aquí!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
