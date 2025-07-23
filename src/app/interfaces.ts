export interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface User {
  email: string;
  username: string;
  phone: string;
  name: Name;
  address: Address;
}

//Products
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}