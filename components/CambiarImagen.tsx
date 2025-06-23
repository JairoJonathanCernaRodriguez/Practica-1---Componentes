'use client';

import { useState } from 'react';

const imagenes = [
  '/file.svg',   
  '/globe.svg',  
];

export default function CambiarImagen() {
  const [index, setIndex] = useState(0);

  const cambiarImagen = () => {
    setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <img src={imagenes[index]} alt="Imagen cambiante" width={200} height={200} />
      <br />
      <button onClick={cambiarImagen}>Cambiar imagen</button>
      <br />
      <br />
    </div>
  );
}
