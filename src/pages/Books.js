import React from 'react';
import BookItem from '../components/BookItem';
import AddNewBook from '../components/AddNewBook';

const books = [
  {
    id: 1,
    title: 'cahier dun retour au pays natal ',
    author: 'Aime Cesaire',
  },
  {
    id: 2,
    title: 'Une vie de Boy',
    author: 'Ferdinand OYONO',
  },
];

const Books = () => (
  <main>
    <section>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </section>
    <section>
      <AddNewBook />
    </section>
  </main>
);

export default Books;
