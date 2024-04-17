import React, {Component} from 'react';
import { useEffect, useRef } from "react";

export default function bookComponent() {
 
        function handleSubmit(e) {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const bookName = form.get('bookName')
            console.log({ bookName });
            alert(bookName);
          }

        return (
            <form onSubmit={handleSubmit}>
            <input type='text' name='bookName' placeholder='Book name' />
            <input type='text' name='pageCount' placeholder='Page count'/>
            <input type='text' name='year' placeholder='Year'/>
            <input type='text' name='editorialName' placeholder='Editorial name'/>
            <input type='text' name='editorialCity' placeholder='Editorial city'/>
            <input type='text' name='authorName' placeholder='Author name'/>
            <input type='text' name='authorCity' placeholder='Author city'/>
            <input type='text' name='authorCountry' placeholder='Author country'/>       
            <button type='submit'>Submit</button>
            </form>
        );
      
}