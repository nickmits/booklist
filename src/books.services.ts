import { useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useBooks } from "./context";

const useBooksServices = () => {
  const { setBooks, setLoadingBooks, setOpenSnackbar, setErrorMessage } =
    useBooks();

  const getBooks = useCallback(() => {
    setLoadingBooks(true);
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((res) => {
        setLoadingBooks(false);
        setBooks && setBooks(res.results);
      })
      .catch((err) => {
        setErrorMessage("Failed retrieving book details");
        setOpenSnackbar(true);
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
        setIsSearching(false);
        const data = await response.json();

        setBooks(data.results);
      } catch (error) {
        setErrorMessage("Failed to search book");
        setIsSearching(false);
        setOpenSnackbar(true);
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
