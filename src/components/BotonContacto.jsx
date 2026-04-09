import { useState } from 'react'

export default function BotonContacto() {
  const [enviado, setEnviado] = useState(false)

  return (
    <button
      onClick={() => setEnviado(!enviado)}
      className={`w-full font-medium py-3 rounded-lg transition-colors ${
        enviado
          ? 'bg-green-500 hover:bg-green-600'
          : 'bg-blue-600 hover:bg-blue-700'
      } text-white`}
    >
      {enviado ? 'Mensaje enviado!' : 'Enviar'}
    </button>
  )
}