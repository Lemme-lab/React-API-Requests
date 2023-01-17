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
console.log("Just just before the fetch");
useEffect(()=>{
    console.log("Just before the fetch");
    fetch("https://openlibrary.org" + props.iskey + "/editions.json?limit=10")
    .then(res => res.json())
    .then(
        (result)=>{
        console.log("Got into the fetch");
        setIsLoaded(true);
        setbooks(result.entries);
        console.log(result.entries);
        },
        (error)=>{
        setIsLoaded(true);
        setError(true);
        }
        )
}, [])

const showProduct = (key, id) =>{
  console.log(key);
  fetch("https://openlibrary.org" + props.iskey + "/editions.json?limit=10")
  .then((res) => {
      return (res.json());
  })
  .then(
      (result) => {
          props.setbook(result.entries[id]);
          console.log("KEY FOR DETAIL: " + key)
          console.log("RESULT FOR DETAIL: " + result.entries);
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
          <a onClick={() => {showProduct(book.key, book.id)}} href="#">Show</a>
        </li>
      ))}
    </ul>
  );
}

}


export default RestProducts