import React,{Component, useState} from 'react';
import { useLazyQuery, gql } from '@apollo/client';


const BOOKS_QUERY = gql`
   query bookDetails($bookName: String!) {
    bookByName(name: $bookName) {
      name
      pageCount
      year
      author {
        name
      }
    }
  }
`;

const BookList = () => {
 
    const [bookInput, setBookInput] = useState("");
    
    const [bookByName,{ loading, error, data }] = useLazyQuery(BOOKS_QUERY, {
      onCompleted: () => {

      },
      onError: () => {
        alert("Not");
      }
    
    });

  return (
    <div>
      <h2>Search book</h2>

            <input type='text' onChange={(e) => setBookInput(e.target.value)} placeholder='Book name' />    
            <button onClick={() => bookByName({variables : {bookName: bookInput}})}>Submit</button>
            {data && data.bookByName && (
              <div>
                <h1>Book Details</h1>
                <p>Name: {data.bookByName.name}</p>
                <p>Year: {data.bookByName.year}</p>
                <p>Page count: {data.bookByName.pageCount}</p>
              </div>
            )}
    </div>
  );
}

export default BookList;