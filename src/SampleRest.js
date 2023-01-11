import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

function RestProducts(props){

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [books, setbooks] = useState([]);

console.log("In the SampleRest: " + props.iskey)
//var key = "/works/OL82586W";

useEffect(()=>{
    fetch("https://openlibrary.org" + "/works/OL82586W" + "/editions.json?limit=5")
    .then(res => res.json())
    .then(
        (result)=>{
        setIsLoaded(true);
        setbooks(result.entries);

        },
        (error)=>{
        setIsLoaded(true);
        setError(true);
        }
        )
}, [])

const showProduct = (key) =>{
  console.log(key);
  fetch("https://openlibrary.org" + "/works/OL82586W" + "/editions.json?limit=5")
  .then((res) => {
      return (res.json());
  })
  .then(
      (result) => {
          props.setbook(result);
          console.log(key)
          console.log(result);
      },
      (error) => {
          setError(error.key);
      })
}

if (error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Loading...</div>;
} else {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {book.title}{"    ["}{book.full_title}{"]"}
          <a onClick={() => {showProduct(book.key)}} href="#">Show</a>
        </li>
      ))}
    </ul>
  );
}
}


export default RestProducts