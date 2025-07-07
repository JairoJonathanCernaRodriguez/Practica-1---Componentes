'use client';

import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

import Titulo from '../../../components/Titulo';

export default function FormularioPage() {
    const [fondo] = useState('mediumTurquoise');
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    edad: '',
    genero: '',
    rol: '',
    opciones: false,
    notas: '',
    fecha: ''
  });

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const reiniciar = () => {
    setForm({
      nombre: '',
      apellido: '',
      email: '',
      contraseña: '',
      edad: '',
      genero: '',
      rol: '',
      opciones: false,
      notas: '',
      fecha: ''
    });
  };

return (
    <main style={{ backgroundColor: fondo, padding: '2rem', minHeight: '100vh' }}>
      <Titulo texto="Formulario de Registro" color="black" tamaño="5rem" fuente="Arial" />

      <Form style={{ marginTop: '2rem' }}>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="apellido">Apellido</Label>
          <Input type="text" name="apellido" value={form.apellido} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="contraseña">Contraseña</Label>
          <Input type="password" name="contraseña" value={form.contraseña} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="edad">Edad</Label>
          <Input type="number" name="edad" value={form.edad} onChange={handleChange} />
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Género</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="genero" value="Masculino" checked={form.genero === 'Masculino'} onChange={handleChange} />
              Masculino
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="genero" value="Femenino" checked={form.genero === 'Femenino'} onChange={handleChange} />
              Femenino
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label for="rol">Rol</Label>
          <Input type="select" name="rol" value={form.rol} onChange={handleChange}>
            <option value="">Selecciona un rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Editor">Editor</option>
            <option value="Lector">Lector</option>
          </Input>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="opciones" checked={form.opciones} onChange={handleChange} />
            Opciones
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="notas">Notas</Label>
          <Input type="textarea" name="notas" value={form.notas} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="fecha">Fecha de registro</Label>
          <Input type="date" name="fecha" value={form.fecha} onChange={handleChange} />
        </FormGroup>

        <div style={{ marginTop: '1rem' }}>
          <Button color="primary" onClick={toggle} style={{ marginRight: '1rem' }}>
            Mostrar
          </Button>
          <Button color="secondary" onClick={reiniciar}>
            Reiniciar
          </Button>
        </div>
      </Form>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Datos del formulario</ModalHeader>
        <ModalBody>
          <pre>{JSON.stringify(form, null, 2)}</pre>
        </ModalBody>
      </Modal>
    </main>
  );
}

