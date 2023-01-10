import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

function Item(props){

    return(
        <>
            <h2>Book: {props.book.title}</h2>
            <h2>Release Date: {props.book.publish_date}</h2>
            <h2>Publisher: {props.book.publishers}</h2>
            <h2>Country: {props.book.publish_country}</h2>
        

        </>
    )   
    }

export default Item