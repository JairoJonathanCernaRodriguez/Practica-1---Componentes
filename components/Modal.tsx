'use client';

import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ModalReact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className="boton-modal" onClick={() => setOpen(true)}>Mostrar Modal</Button>
      <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader toggle={() => setOpen(false)}>Título del Modal</ModalHeader>
        <ModalBody>Este es el contenido del modal.</ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={() => setOpen(false)}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
