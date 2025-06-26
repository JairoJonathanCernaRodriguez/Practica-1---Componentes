'use client';

import { useState } from 'react';

import Titulo from '../../components/Titulo';
import Parrafo from '../../components/Parrafo';
import Imagen from '../../components/Imagen';

import Contador from '../../components/Contador';
import CambiarImagen from '../../components/CambiarImagen';
import CambiarFondo from '../../components/CambiarFondo';

import ToastAzul from '../../components/ToastAzul';
import Modal from '../../components/Modal';
import Carousel from '../../components/Carousel';

export default function Home() {
  const [fondo, setFondo] = useState('gray');

  return (
    <main style={{ backgroundColor: fondo, padding: '2rem', minHeight: '100vh' }}>
      {/* Componentes práctica 1 */}
      <Titulo texto="Practica 1" color="Orange" tamaño="5rem" fuente="Arial" />
      <Parrafo texto="Párrafo con props." color="blue" tamaño="3rem" fuente="Verdana" />
      <Imagen src="/next.svg" alt="Logo Next.js" ancho={200} alto={200} />

      <hr style={{ margin: '2rem 0', border: 'none', height: '2px', backgroundColor: 'white' }} />

      {/* Componentes práctica 2 */}
      <Titulo texto='Practica 2' color='Orange' tamaño='5rem' fuente='Arial'/>
      <Contador />
      <CambiarImagen />
      <CambiarFondo onCambiarColor={setFondo} />

      <hr style={{ margin: '2rem 0', border: 'none', height: '2px', backgroundColor: 'white' }} />
      <Titulo texto='Practica 3' color='Orange' tamaño='5rem' fuente='Arial'/>
      <ToastAzul/> 
      <br />
      <br /> 
      <Modal />
      <br />
      <br />
      <Carousel />

      <hr style={{ margin: '2rem 0', border: 'none', height: '2px', backgroundColor: 'white' }} />
      <Titulo texto='Practica 4' color='Orange' tamaño='5rem' fuente='Arial'/>

    </main>
  );
}
