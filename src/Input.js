import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function Inputs(props){
    const [inputs, setInputs] = useState({});
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
       }

        const handleChange1 = (event) => {
        
       var name_book = inputs.book.replace(/\s/g, '+')
        props.setname(name_book);
        console.log(name_book);


       }


    return(
        <>
        <h1> Search a Book </h1>
        <input type="text" placeholder="Search Book" name="book" value={inputs.book} onChange={handleChange}/>
        <h3></h3>
        <button onClick={handleChange1} className="button1">Search</button>
        </>
    )

}


export default Inputs