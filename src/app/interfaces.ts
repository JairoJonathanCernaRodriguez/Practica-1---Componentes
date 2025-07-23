export interface Direccion {
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Nombre {
  firstname: string;
  lastname: string;
}

export interface Usuario {
  email: string;
  username: string;
  phone: string;
  name: Nombre;
  address: Direccion;
}
