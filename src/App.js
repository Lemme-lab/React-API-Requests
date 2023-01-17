import logo from './logo.svg';
import './App.css';
import RestProducts from './SampleRest';
import Item from './Item';
import Inputs from './Input'
import {getkey} from './GetBookID';

import { useEffect, useState } from "react";



function App() {
  const [name, setname] = useState("");
  const [key, setkey] = useState("/works/OL82586W");
  const [book, setbook] = useState("null");


  useEffect(() => {getkey(name,setkey)}, [name]); 
  
  



  return (
    <div className="App">
      <header className="App-header">

      <Inputs setname={setname}/>

      <RestProducts setbook={setbook} iskey={key}/>

      <Item isbook={book}/>
      
      </header>
    </div>
  );
}

export default App;
