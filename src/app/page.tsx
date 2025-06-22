'use client';

import Titulo from '../../components/Titulo';
import Parrafo from '../../components/Parrafo';
import Imagen from '../../components/Imagen';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'gray', padding: '2rem' }}>
      <Titulo texto="Hola Mundo" color="red" tamaño="5rem" fuente="Arial" />
      <Parrafo texto="Párrafo con props." color="blue" tamaño="3rem" fuente="Verdana" />
      <Imagen src="/next.svg" alt="Logo Next.js" ancho={200} alto={200} />
    </main>
  );
}
