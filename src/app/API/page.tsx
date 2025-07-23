'use client';

import { useEffect, useState } from 'react';
import {
  Button, Card, CardBody, CardHeader, CardFooter,
  CardTitle, CardText, Table
} from 'reactstrap';

import { User } from '../interfaces';
import { Product } from '../interfaces';

export default function API() {
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchRandomUser = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/users');
      const data: User[] = await res.json();
      const index = Math.floor(Math.random() * data.length);
      setUser(data[index]);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data: Product[] = await res.json();

      // Simulate different 15 products
      const randomProducts = data
        .sort(() => 0.5 - Math.random())
        .slice(0, 15);

      setProducts(randomProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-4">Random User</h2>
      <Button color="success" onClick={fetchRandomUser}>
        Show random user
      </Button>

      {user && (
        <Card className="mt-4">
          <CardHeader>
            {user.name.firstname} {user.name.lastname}
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5">Username: {user.username}</CardTitle>
            <CardText>Email: {user.email}</CardText>
            <CardText>Phone: {user.phone}</CardText>
          </CardBody>
          <CardFooter>
            Address: {user.address.street} #{user.address.number}, {user.address.city}, ZIP {user.address.zipcode}
          </CardFooter>
        </Card>
      )}

      <hr className="my-5" />

      <h2 className="mb-3">Products</h2>
      <Button color="primary" onClick={fetchProducts}>
        Load 15 random products
      </Button>

      {products.length > 0 && (
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.title}</td>
                <td>${prod.price}</td>
                <td>{prod.category}</td>
                <td>{prod.description}</td>
                <td>
                  <img src={prod.image} alt={prod.title} width={60} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
