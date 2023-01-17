import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

function Item(props){

    return(
        <>
            <h2>Book: {props.isbook.title}</h2>
            <h2>Release Date: {props.isbook.publish_date}</h2>
            <h2>Publisher: {props.isbook.publishers}</h2>
            <h2>Country: {props.isbook.publish_country}</h2>
        </>
    )   
    }

export default Item