import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

function RestID(props){

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [books, setbooks] = useState([]);

useEffect(()=>{
    fetch("http://openlibrary.org/search.json?q=the+lord+of+the+rings")
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

if (error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Loading...</div>;
} else {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
        </li>
      ))}
    </ul>
  );
}
}


export default RestProducts