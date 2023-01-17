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
  const [updatevalue, update] = useState("null");


  useEffect(() => {getkey(name,setkey)}, [name]); 
  useEffect(() => {console.log("refreshing")}, [updatevalue]); 
  
  



  return (
    <div className="App">
      <header className="App-header">

      <Inputs setname={setname}/>

      <RestProducts setbook={setbook} iskey={key} update={update}/>

      <Item isbook={book}/>
      
      </header>
    </div>
  );
}

export default App;
