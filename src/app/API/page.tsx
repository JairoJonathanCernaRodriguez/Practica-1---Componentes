'use client';


import { useState } from 'react';
import {
  Button, Card, CardBody, CardHeader, CardFooter,
  CardTitle, CardText
} from 'reactstrap';

import { Usuario} from '../interfaces';


export default function API() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const obtenerUsuarioAleatorio = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/users');
      const data: Usuario[] = await res.json();

      const indice = Math.floor(Math.random() * data.length);
      const usuarioSeleccionado = data[indice];

      setUsuario(usuarioSeleccionado);
    } catch (error) {
      console.error('Error al obtener usuario:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Usuario Aleatorio</h2>
      <Button color="success" onClick={obtenerUsuarioAleatorio}>
        Mostrar usuario aleatorio
      </Button>

      {usuario && (
        <Card className="mt-4">
          <CardHeader>
            {usuario.name.firstname} {usuario.name.lastname}
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5">Usuario: {usuario.username}</CardTitle>
            <CardText>Correo: {usuario.email}</CardText>
            <CardText>Teléfono: {usuario.phone}</CardText>
          </CardBody>
          <CardFooter>
            Dirección: {usuario.address.street} #{usuario.address.number}, {usuario.address.city}, CP {usuario.address.zipcode}
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
