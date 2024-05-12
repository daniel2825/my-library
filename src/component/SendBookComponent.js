import React, {Component} from 'react';
import { useEffect, useRef } from "react";
import { gql, useMutation } from '@apollo/client';


const BOOK_MUTATION = gql`
mutation AddBook($book: BookInput!, $authors: [AuthorInput!]!, $country: CountryInput!, $editorial: EditorialInput!) {
  addBook(
    book: $book
    authors: $authors
    country: $country
    editorial: $editorial
  ) {
    name
    year
    pageCount
    author {
      name
    }
  }
}
`;

const SendBook = () => {
  const [addBook, { loading, error }] = useMutation(BOOK_MUTATION); 
  function HandleSubmit(e) {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const bookName = form.get('bookName')
            console.log({ bookName });
            addBook({
              variables: {
                book:{
                  name: form.get('bookName'),
                  pageCount: form.get('pageCount'),
                  year: form.get('year')
                },
                authors:[{
                  name:form.get('authorName'),
                  id:form.get('authorId'),
                  city:{
                    name:form.get('authorCity')
                  },
                  country:{
                    name:form.get('authorCountry')
                  }
                }],
                country:{
                   name: form.get('countryBook')
                },
                editorial:{
                   name: form.get('editorialName'),
                   city: {
                    name: form.get('editorialCity')
                   }
                }
                
              },
            });
            
          }

        return (
          <div>
            <form onSubmit={HandleSubmit}>
            <input type='text' name='bookName' placeholder='Book name' />
            <br/>
            <input type='text' name='pageCount' placeholder='Page count'/>
            <br/>
            <input type='text' name='year' placeholder='Year'/>
            <br/>
            <input type='text' name='countryBook' placeholder='Country book'/>
            <br/>
            <input type='text' name='editorialName' placeholder='Editorial name'/>
            <br/>
            <input type='text' name='editorialCity' placeholder='Editorial city'/>
            <br/>   
            <input type='text' name='authorName' placeholder='Author name'/>
            <br/>
            <input type='text' name='authorId' placeholder='Number identification Author'/>
            <br/>
            <input type='text' name='authorCity' placeholder='Author city'/>
            <br/>
            <input type='text' name='authorCountry' placeholder='Author country'/>       
            <br/>
            <button type='submit'>Register book</button>
            </form>
          </div>
        );
      }
      export default SendBook;
