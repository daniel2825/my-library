import React,{Component} from 'react';
import { useQuery, gql } from '@apollo/client';


const BOOKS_QUERY = gql`
   query bookDetails {
    bookByName(name: "Cien años de soledad") {
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
 
  const { loading, error, data } = useQuery(BOOKS_QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} {error.name}</p>;

  return (
    <div>
      <h2>Book List</h2>
      <h2>{data.bookByName.name}</h2>
      <h2>{data.bookByName.pageCount}</h2>
      <h2>{data.bookByName.year}</h2>
      <ul>
      {data.bookByName.author.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>



    </div>
  );
};

export default BookList;