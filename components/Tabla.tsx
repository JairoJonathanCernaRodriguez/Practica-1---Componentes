'use client';

import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import data from '../data/data.json';
 import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export default function Tabla() {
  const [modal, setModal] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState('');

  const toggleModal = (imagen: string) => {
    setImagenSeleccionada(imagen);
    setModal(!modal);
  };

const iconMap: Record<string, IconDefinition> = {
  user: faUser,
  briefcase: faBriefcase,
  paintBrush: faPaintBrush
};


  return (
    <div style={{ padding: '1rem' }}>
      <Table bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Icono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((persona, index) => (
            <tr key={persona.id}>
              <th scope="row">{index + 1}</th>
              <td>{persona.nombre}</td>
              <td>{persona.descripcion}</td>
              <td>
                <FontAwesomeIcon icon={iconMap[persona.icono]} />
              </td>
              <td>
                <Button color="secondary" onClick={() => toggleModal(persona.imagen)}>Ver imagen</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal} toggle={() => toggleModal('')}>
  <ModalHeader toggle={() => toggleModal('')}>Imagen</ModalHeader>
  <ModalBody>
    {imagenSeleccionada ? (
      <img src={imagenSeleccionada} alt="Imagen" style={{ width: '100%' }} />
    ) : null}
  </ModalBody>
</Modal>

    </div>
  );
}
