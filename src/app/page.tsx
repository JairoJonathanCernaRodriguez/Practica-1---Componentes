'use client';

import { useState } from 'react';

import Titulo from '../../components/Titulo';
import Parrafo from '../../components/Parrafo';
import Imagen from '../../components/Imagen';

import Contador from '../../components/Contador';
import CambiarImagen from '../../components/CambiarImagen';
import CambiarFondo from '../../components/CambiarFondo';

export default function Home() {
  const [fondo, setFondo] = useState('gray');

  return (
    <main style={{ backgroundColor: fondo, padding: '2rem', minHeight: '100vh' }}>
      {/* Componentes práctica 1 */}
      <Titulo texto="Hola Mundo" color="red" tamaño="5rem" fuente="Arial" />
      <Parrafo texto="Párrafo con props." color="blue" tamaño="3rem" fuente="Verdana" />
      <Imagen src="/next.svg" alt="Logo Next.js" ancho={200} alto={200} />

      <hr style={{ margin: '2rem 0' }} />

      {/* Componentes práctica 2 */}
      <Contador />
      <CambiarImagen />
      <CambiarFondo onCambiarColor={setFondo} />
    </main>
  );
}
