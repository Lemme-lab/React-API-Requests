import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

function RestProducts(props){

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [books, setbooks] = useState([]);
var counter = 0;

console.log("In the SampleRest: " + props.iskey)
//var key = "/works/OL82586W";
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
        props.update("")
        },
        (error)=>{
        setIsLoaded(true);
        setError(true);
        }
        )
}, [props.iskey])


const showProduct = (books) =>{
 props.setbook(books);
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
          <a onClick={() => {showProduct(book)}} href="#">Show</a>
        </li>
      ))}
      {props.update("")}
    </ul>
  );
}

}


export default RestProducts