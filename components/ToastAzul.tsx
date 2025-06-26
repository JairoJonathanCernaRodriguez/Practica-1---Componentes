'use client';

import { useState } from 'react';
import { Button, Toast, ToastBody } from 'reactstrap';

export default function ToastAzul() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button className="boton-Toast" onClick={() => setVisible(!visible)}>Mostrar Toast</Button>
      {visible && (
        <div className="p-3 bg-light mt-3">
          <Toast>
            <ToastBody className="bg-primary text-white">Este es un Toast azul.</ToastBody>
          </Toast>
        </div>
      )}
    </>
  );
}
