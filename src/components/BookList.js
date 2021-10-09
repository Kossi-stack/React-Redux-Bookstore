import React from 'react';
import { useSelector } from 'react-redux';
import { getBooks } from '../Redux/Books/Books'
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </ul>
  );
};

export default Books;
