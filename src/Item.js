import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

function Item(props){

    return(
        <>
            <h2>Product: ID: {props.useproduct.id}:</h2>
            <h3>{props.useproduct.description}</h3>
        </>
    )   
    }

export default Item