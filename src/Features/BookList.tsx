import {
  Button,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
  InputLabel,
  Typography,
  CircularProgress,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useBooksServices from "../books.services";
import { useBooks } from "../context";
import PersonalReference from "./SearchBox";
import { StyledBookListItem } from "../Components/styled";
import { useNavigate } from "react-router-dom";
import { authors } from "../utils";

export default function BookList() {
  const { books, loadingBooks, setSelectedBook } = useBooks();
  const [expanded, setExpanded] = useState<boolean>(false);
  const { getBooks } = useBooksServices();
  const navigate = useNavigate();

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const getBookById = (id: number) => {
    navigate(`/book-details/${id}`);
    fetch(`https://gutendex.com/books?ids=${id}`)
      .then((res) => res.json())
      .then((res) => setSelectedBook(res.results));
  };

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return !!loadingBooks ? (
    <CircularProgress size={50} />
  ) : (
    <>
      <Grid item xs={12} md={6}>
        <List>
          <Grid item xs={12}>
            <Button onClick={() => setExpanded(!expanded)}>
              <InputLabel>
                <Typography variant='subtitle2'>BookList</Typography>
              </InputLabel>

              <ExpandMoreIcon />
            </Button>
          </Grid>

          <Collapse in={expanded}>
            <PersonalReference />
            {books &&
              books.map((book) => {
                return (
                  <Box border={1}>
                    <Grid container>
                      <Grid textAlign='center' item xs={12} md={6}>
                        <ListItem>
                          <StyledBookListItem primary='id' />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <ListItem>
                          <StyledBookListItem primary={book.id} />
                        </ListItem>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid textAlign='center' item xs={12} md={6}>
                        <ListItem>
                          <StyledBookListItem primary='Title' />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <ListItem>
                          <StyledBookListItem primary={book.title} />
                        </ListItem>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <ListItem>
                          <StyledBookListItem primary={"Authors"} />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <ListItem>
                          <StyledBookListItem primary={authors(book)} />
                        </ListItem>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <ListItem>
                          <StyledBookListItem primary={"downloads"} />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <ListItem>
                          <StyledBookListItem primary={book.download_count} />
                        </ListItem>
                      </Grid>
                    </Grid>

                    <Grid container spacing={1} item xs={12} md={6}>
                      <Button onClick={() => getBookById(book.id)}>
                        <EditIcon />
                      </Button>
                      <Button onClick={() => {}}>
                        <DeleteIcon />
                      </Button>
                    </Grid>
                  </Box>
                );
              })}
          </Collapse>
        </List>
      </Grid>
    </>
  );
}
