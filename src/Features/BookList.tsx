import {
  Button,
  Collapse,
  Grid,
  Box,
  InputLabel,
  Typography,
  CircularProgress,
  Stack,
  Pagination,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useBooksServices from "../books.services";
import { useBooks } from "../context";
import SearchBox from "./SearchBox";
import { StyledBookListItem } from "../Components/styled";
import { useNavigate } from "react-router-dom";
import { authors } from "../utils";
import { IBook } from "../interfaces/books";
import SnackBarError from "../Components/SnackBarError";
import Tooltip from "@mui/material/Tooltip";

export default function BookList() {
  const {
    books,
    loadingBooks,
    setSelectedBook,
    setOpenSnackbar,
    errorMessage,
    setErrorMessage,
    likedBooks,
    setLikedBooks,
  } = useBooks();
  const [expanded, setExpanded] = useState<boolean>(true);

  const { getBooks } = useBooksServices();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage = 3;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books?.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = books && Math.ceil(books.length / booksPerPage);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const getBookById = (id: number) => {
    navigate(`/book-details/${id}`);
    fetch(`https://gutendex.com/books?ids=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setSelectedBook(res.results);
      })
      .catch((err) => {
        setErrorMessage("Error fetching book information.");
        setOpenSnackbar(true);
      });
  };

  const addFavoriteBook = (book: IBook) => {
    const favoriteBooks =
      JSON.parse(localStorage.getItem("favoriteBooks") as string) || [];
    if (
      !favoriteBooks.some((existingbook: IBook) => existingbook.id === book.id)
    ) {
      const updatedFavorites = [...favoriteBooks, book];
      localStorage.setItem("favoriteBooks", JSON.stringify(updatedFavorites));
      setLikedBooks(updatedFavorites);
    } else {
      const removedFavBooks = favoriteBooks.filter(
        (fb: IBook) => fb.id !== book.id
      );
      localStorage.setItem("favoriteBooks", JSON.stringify(removedFavBooks));
      setLikedBooks(removedFavBooks);
    }
  };

  useEffect(() => {
    localStorage.getItem("favoriteBooks") &&
      setLikedBooks(
        JSON.parse(localStorage.getItem("favoriteBooks") as string)
      );
  }, [localStorage.getItem("favoriteBooks")]);

  return !!loadingBooks ? (
    <CircularProgress size={50} />
  ) : (
    <>
      <SnackBarError errorMessage={errorMessage} />
      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <Button onClick={() => setExpanded(!expanded)}>
            <InputLabel>
              <Typography variant='subtitle2'>BookList</Typography>
            </InputLabel>
            <ExpandMoreIcon />
          </Button>
        </Grid>

        <Collapse in={expanded}>
          <Grid sx={{ marginBottom: "5px" }} item xs={12} sm={5} spacing={5}>
            <SearchBox />
          </Grid>
          <Grid item xs={12}>
            {currentBooks &&
              currentBooks.map((book) => (
                <Grid
                  container
                  justifyContent={"center"}
                  item
                  direction={isMobile ? "column" : "row"}
                  xs={12}
                  key={book.id}
                >
                  <Box border={2} width='100%'>
                    <Grid container alignItems='center'>
                      <Grid item xs={6} md={3} textAlign='center'>
                        <StyledBookListItem primary='id' />
                        <StyledBookListItem primary={book.id} />
                      </Grid>
                      <Grid item xs={6} md={3}>
                        <StyledBookListItem primary='Title' />
                        <StyledBookListItem primary={book.title} />
                      </Grid>
                      <Grid item xs={6} md={3}>
                        <StyledBookListItem primary={"Authors"} />
                        <StyledBookListItem primary={authors(book)} />
                      </Grid>
                      <Grid item xs={6} md={3}>
                        <StyledBookListItem primary={"downloads"} />
                        <StyledBookListItem primary={book.download_count} />
                      </Grid>
                    </Grid>

                    <Grid container justifyContent='center'>
                      <Tooltip
                        placement='top-start'
                        title='Pick to see book details'
                      >
                        <Button onClick={() => getBookById(book.id)}>
                          <EditIcon color='secondary' />
                        </Button>
                      </Tooltip>
                      <Tooltip
                        title={
                          likedBooks &&
                          likedBooks.some((likedBook) => {
                            return likedBook.id === book.id;
                          })
                            ? "Press to remove it from favorit card"
                            : "Press to add to favorite card"
                        }
                        placement='top-start'
                      >
                        <Button onClick={() => addFavoriteBook(book)}>
                          <FavoriteIcon
                            color={
                              likedBooks &&
                              likedBooks.some((likedBook) => {
                                return likedBook.id === book.id;
                              })
                                ? "error"
                                : "primary"
                            }
                          />
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Box>
                </Grid>
              ))}
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2} justifyContent='center' alignItems='center'>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChangePage}
                color='primary'
              />
            </Stack>
          </Grid>
        </Collapse>
      </Grid>
    </>
  );
}
