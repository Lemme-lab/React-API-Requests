import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

function Item(props){

    return(
        <>
            <h2>Book: {props.book.title}</h2>
            <h3>Release Date: {props.book.publish_date}</h3>
            <h3>Publisher: {props.book.publishers}</h3>

        </>
    )   
    }

export default Item