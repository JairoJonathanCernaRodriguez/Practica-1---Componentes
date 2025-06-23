'use client';

import { useState } from 'react';

type CambiarFondoProps = {
  onCambiarColor: (color: string) => void;
};

export default function CambiarFondo({ onCambiarColor }: CambiarFondoProps) {
  const colores = ['#e0f7fa', '#fce4ec', '#fff9c4', '#c8e6c9'];
  const [index, setIndex] = useState(0);

  const cambiarColor = () => {
    const nuevoIndex = (index + 1) % colores.length;
    setIndex(nuevoIndex);
    onCambiarColor(colores[nuevoIndex]);
  };

  return (
    <button onClick={cambiarColor}>Cambiar color de fondo</button>
  );
}
