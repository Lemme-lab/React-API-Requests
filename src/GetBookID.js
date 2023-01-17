import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

export function getkey(name,setkey) {

    var error = null;
    var isloaded = false;
    var books = [];
    var output = "";

    console.log("got here")
    fetch("http://openlibrary.org/search.json?q=" + name)
    .then(res => res.json())
    .then(
        (result)=>{
        isloaded = false;
        books = result.docs;
        console.log(result);
        console.log("This is the key set: " + result.docs[0].key);
        output = result.docs[0].key;
        setkey(output);

        },
        (error)=>{
        isloaded = true;
        error = true;
        }
        )

    return output;
}