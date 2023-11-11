import { useState } from "react";
import { IBook } from "../interfaces/books";

export const useContextState = () => {
  const [books, setBooks] = useState<IBook[]>();
  const [loadingBooks, setLoadingBooks] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<IBook[]>();

  const booksState = {
    loadingBooks,
    books,
    setBooks,
    setLoadingBooks,
    selectedBook,
    setSelectedBook,
  };

  return booksState;
};
