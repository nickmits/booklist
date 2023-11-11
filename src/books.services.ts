import { useCallback, useState } from "react";
import { IBook } from "./interfaces/books";
import { useDebouncedCallback } from "use-debounce";
import { useBooks } from "./context";

const useBooksServices = () => {
  const { setBooks, setLoadingBooks } = useBooks();

  const getBooks = useCallback(() => {
    setLoadingBooks(true);
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((res) => {
        setLoadingBooks(false);
        setBooks && setBooks(res.results);
      })
      .catch((err) => {
        if (err.type) setLoadingBooks(false);
        alert("Something went wrong");
        setLoadingBooks(false);
      });
  }, [setLoadingBooks, setLoadingBooks]);

  const searchBook = useDebouncedCallback(
    async (
      searchedBook: string,
      setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      const apiUrl = `https://gutendex.com/books?search=${encodeURIComponent(
        searchedBook
      )}`;
      try {
        setIsSearching(true);
        const response = await fetch(apiUrl);

        if (!response.ok) {
          setIsSearching(false);
          throw new Error("Network response was not ok");
        }
        setIsSearching(false);
        const data = await response.json();

        setBooks(data.results);
      } catch (error) {
        setIsSearching(false);
        alert("something went wrong!");
      }
    },
    2000
  );
  return {
    getBooks,
    searchBook,
  };
};

export default useBooksServices;
