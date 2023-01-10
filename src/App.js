import logo from './logo.svg';
import './App.css';
import RestProducts from './SampleRest';
import Item from './Item';
import Inputs from './Input'
import RestID from './GetBookID'

import { useEffect, useState } from "react";


function abc(){

const error = null;
const isLoaded = false;
const books = [];
const key = "";

    console.log("got here")
    fetch("http://openlibrary.org/search.json?q=" + props.name)
    .then(res => res.json())
    .then(
        (result)=>{
        setIsLoaded(true);
        books = result.docs;
        key = result.docs[1].key;

        },
        (error)=>{
        setIsLoaded(true);
        setError(true);
        }
        )
}



function App() {
  const [name, setname] = useState("");
  const [key, setkey] = useState("");
  const [book, setbook] = useState("null");


  useEffect(() => {
    RestID()


  }, [name]); // <- add the count variable here



  return (
    <div className="App">
      <header className="App-header">

      <Inputs setname={setname}/>

      <RestID setkey={setkey} name={name}/>

      <RestProducts setbook={setbook} key={key}/>

      <Item book={book}/>
      
      </header>
    </div>
  );
}

export default App;
