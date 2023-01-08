import logo from './logo.svg';
import './App.css';
import RestProducts from './SampleRest';
import Item from './Item';
import Inputs from './Input'

import { useState } from "react";



function App() {
  const [name, setname] = useState("null");
  const [book, setbook] = useState("null");

  return (
    <div className="App">
      <header className="App-header">
      {/*<Inputs setname={setname}/>*/}
      {/*
      Really weird json structure on the API
      Would need to get a key from 

      http://openlibrary.org/search.json?title=

      to then put that key into RestProducts.
      Failed to get the key from the search result. 
           
      */}
      <RestProducts setbook={setbook} book/>
      <Item book={book}/>
      </header>
    </div>
  );
}

export default App;
