'use client';

import { FaTrash, FaEdit } from 'react-icons/fa';
import Titulo from '../../../components/Titulo';
import React, { useState } from 'react';

import {
  Button,Form,FormGroup,Label,Input,
  Modal,ModalHeader,ModalBody, Table
} from 'reactstrap';

interface Registro {
  nombre: string;
  apellido: string;
  email: string;
  contraseña: string;
  edad: number;
  genero: string;
  rol: string;
  opciones: boolean;
  notas: string;
  fecha: string;
}


export default function FormularioPage() {
    const [fondo] = useState('mediumTurquoise');
  const [form, setForm] = useState<Registro>({

    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    edad: 0,
    genero: '',
    rol: '',
    opciones: false,
    notas: '',
    fecha: ''
  });
 const [errors, setErrors] = useState({
  nombre: '',
  apellido: '',
  email: '',
  edad: '',
  fecha: ''
});

const [registros, setRegistros] = useState<Registro[]>([]);


const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

// Funciones de validación 
  const validarNombre = (nombre: string) => {
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
      return 'Solo se permiten letras y espacios';
    }
    return '';
  };

  const validarApellido = (apellido: string) => {
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido)) {
      return 'Solo se permiten letras y espacios';
    }
    return '';
  };

const validarEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Formato de email inválido';
  };

  const validarEdad = (edad: number) => {
  if (isNaN(edad)) {
    return 'Solo números';
  }
  if (edad < 1 || edad > 100) {
    return 'Debe de ser numero entre 1 y 100';
  }
  return '';
};


const validarFecha = (valor: string) => {
    const hoy = new Date().toISOString().split('T')[0];
    return valor >= hoy ? '' : 'La fecha debe ser hoy o posterior';
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value, type } = e.target;

let valorFinal: string | boolean | number = value;

  if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
    valorFinal = e.target.checked;
  } else if (name === 'edad') {
    valorFinal = Number(value);
  }

  setForm(prev => ({
    ...prev,
    [name]: valorFinal
  }));

    let error = '';
    switch (name) {
      case 'nombre':
        error = validarNombre(value);
        break;
      case 'apellido':
        error = validarApellido(value);
        break;
      case 'email':
        error = validarEmail(value);
        break;
      case 'edad':
        error = validarEdad(Number(value));
        break;
      case 'fecha':
        error = validarFecha(value);
        break;
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };


  const reiniciar = () => {
    setForm({
      nombre: '',
      apellido: '',
      email: '',
      contraseña: '',
      edad: 0,
      genero: '',
      rol: '',
      opciones: false,
      notas: '',
      fecha: ''
    });
   setErrors({
      nombre: '',
      apellido: '',
      email: '',
      edad: '',
      fecha: ''
    });
  };

const guardar = () => {
  if (modoEdicion && registroEditarIndex !== null) {
    const actualizados = [...registros];
    actualizados[registroEditarIndex] = form;
    setRegistros(actualizados);
    setModoEdicion(false);
    setRegistroEditarIndex(null);
  } else {
    setRegistros(prev => [...prev, form]);
  }

  setModal(false); 
  reiniciar();     
};


const eliminarRegistro = (index: number) => {
  const nuevosRegistros = registros.filter((_, i) => i !== index);
  setRegistros(nuevosRegistros);
};

const [modoEdicion, setModoEdicion] = useState(false);
const [registroEditarIndex, setRegistroEditarIndex] = useState<number | null>(null);

const editarRegistro = (index: number) => {
  const registro = registros[index];
  setForm(registro);
  setRegistroEditarIndex(index);
  setModoEdicion(true);
  setModal(true);
};


return (
    <main style={{ backgroundColor: fondo, padding: '2rem', minHeight: '100vh' }}>
      <Titulo texto="Formulario de Registro" color="black" tamaño="5rem" fuente="Arial" />

      <Form style={{ marginTop: '2rem' }}>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input type="text" name="nombre" value={form.nombre} onChange={handleChange} invalid={!!errors.nombre} valid={form.nombre !== '' && !errors.nombre}/>
          {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}
        </FormGroup>

        <FormGroup>
          <Label for="apellido">Apellido</Label>
          <Input type="text" name="apellido" value={form.apellido} onChange={handleChange} invalid={!!errors.apellido} valid={form.nombre !== '' && !errors.apellido}/>
          {errors.apellido && <p style={{ color: 'red' }}>{errors.apellido}</p>}
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} invalid={!!errors.email} valid={form.nombre !== '' && !errors.email}/>
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </FormGroup>

        <FormGroup>
          <Label for="contraseña">Contraseña</Label>
          <Input type="password" name="contraseña" value={form.contraseña} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="edad">Edad</Label>
          <Input type="number" name="edad" value={form.edad} onChange={handleChange}invalid={!!errors.edad} valid={form.nombre !== '' && !errors.edad}/>
          {errors.edad && <p style={{ color: 'red' }}>{errors.edad}</p>} 
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
          <Input type="date" name="fecha" value={form.fecha} onChange={handleChange}invalid={!!errors.fecha} valid={form.nombre !== '' && !errors.fecha}/>
          {errors.fecha && <p style={{ color: 'red' }}>{errors.fecha}</p>} 
        </FormGroup>

        <div style={{ marginTop: '1rem' }}>
         <Button color="success" onClick={guardar} style={{ marginRight: '1rem' }}>
           Guardar
          </Button>
          <Button color="primary" onClick={toggle} style={{ marginRight: '1rem' }}>
            Mostrar
          </Button>
          <Button color="secondary" onClick={reiniciar}>
            Reiniciar
          </Button>
        </div>
      </Form>

{registros.length > 0 && (
 <Table striped bordered style={{ marginTop: '2rem' }}>
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Email</th>
      <th>Edad</th>
      <th>Rol</th>
      <th>Notas</th>
      <th>Fecha</th>
      <th>Acciones</th> 
    </tr>
  </thead>
  <tbody>
    {registros.map((r, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{r.nombre}</td>
        <td>{r.apellido}</td>
        <td>{r.email}</td>
        <td>{r.edad}</td>
        <td>{r.rol}</td>
        <td>{r.notas}</td>
        <td>{r.fecha}</td>
        <td>
          <Button color="danger" size="sm" onClick={() => eliminarRegistro(index)}>
            <FaTrash /> 
          </Button>
          <Button color="warning" size="sm" onClick={() => editarRegistro(index)} style={{ marginRight: '0.5rem' }}>
            <FaEdit />
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>
)}

{!modoEdicion && (
  <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Datos del formulario</ModalHeader>
    <ModalBody>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </ModalBody>
  </Modal>
  )}
    </main>
  );
}

