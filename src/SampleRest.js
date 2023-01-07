import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

function RestProducts(props){

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [products, setProducts] = useState([]);

useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(
        (result)=>{
        setIsLoaded(true);
        setProducts(result.products);

        },
        (error)=>{
        setIsLoaded(true);
        setError(true);
        }
        )
}, [])

const showProduct = (id) =>{
  console.log(id);
  fetch('https://dummyjson.com/products/' + id)
  .then((res) => {
      return (res.json());
  })
  .then(
      (result) => {
          props.setproduct(result);
          console.log(result);
      },
      (error) => {
          setError(error.id);
      })
}

if (error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Loading...</div>;
} else {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.title} {product.price}
          <a onClick={() => {showProduct(product.id)}} href="#">Show</a>
        </li>
      ))}
    </ul>
  );
}
}


export default RestProducts