import logo from './logo.svg';
import './App.css';
import RestProducts from './SampleRest';
import Item from './Item';

import { useState } from "react";



function App() {
  const [product, setproduct] = useState("null");

  return (
    <div className="App">
      <header className="App-header">

      <RestProducts setproduct={setproduct}/>
      <Item useproduct={product}/>
      </header>
    </div>
  );
}

export default App;
