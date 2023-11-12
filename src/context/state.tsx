import { useEffect, useState } from "react";
import { IBook } from "../interfaces/books";

export const useContextState = () => {
  const [books, setBooks] = useState<IBook[]>();
  const [loadingBooks, setLoadingBooks] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<IBook[]>();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [likedBooks, setLikedBooks] = useState<IBook[]>();

  const booksState = {
    loadingBooks,
    books,
    setBooks,
    setLoadingBooks,
    selectedBook,
    setSelectedBook,
    openSnackbar,
    setOpenSnackbar,
    errorMessage,
    setErrorMessage,
    likedBooks,
    setLikedBooks,
  };

  return booksState;
};
