import logo from './logo.svg';
import './App.css';
import RestProducts from './SampleRest';
import Item from './Item';
import Inputs from './Input'
import RestID from './GetBookID'

import { useState } from "react";



function App() {
  const [name, setname] = useState("");
  const [key, setkey] = useState("");
  const [book, setbook] = useState("null");



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
