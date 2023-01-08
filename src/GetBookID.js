import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

function RestID(props){

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [books, setbooks] = useState([]);
var count = 0;

console.log("got here")

var name = "Harry+Potter";

useEffect(()=>{

    console.log("got here")
    fetch("http://openlibrary.org/search.json?q=" + name)
    .then(res => res.json())
    .then(
        (result)=>{
        setIsLoaded(true);
        setbooks(result.docs);
        console.log(result);
        console.log("This is the key set: " + result.docs[1].key);
        props.setkey(result.docs[1].key + "");
        console.log("Put the key into the usestate");

        },
        (error)=>{
        setIsLoaded(true);
        setError(true);
        }
        )
}, [])
}


export default RestID