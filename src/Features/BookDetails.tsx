import {
  Button,
  Grid,
  ListItem,
  Box,
  Typography,
  CircularProgress,
  Divider,
} from "@mui/material";
import { StyledBookListItem } from "../Components/styled";
import { useBooks } from "../context";
import { authors } from "../utils";
import MainLayout from "../Components/MainLayout";
import { useNavigate } from "react-router-dom";
import SnackBarError from "../Components/SnackBarError";

const BookDetails = () => {
  const { selectedBook, setSelectedBook, errorMessage } = useBooks();
  const navigate = useNavigate();

  const goToBookList = () => {
    navigate("../");
    setSelectedBook(undefined);
  };

  return selectedBook ? (
    <MainLayout>
      <Typography variant='h3'> Book details</Typography>
      <Box border={2} width='50%'>
        <Grid container>
          <Grid textAlign='center' item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem primary='id' />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem primary={selectedBook[0].id} />
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ border: 1, opacity: "0.2" }} />
        <Grid container>
          <Grid textAlign='center' item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem primary='Title' />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem primary={selectedBook[0].title} />
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ border: 1, opacity: "0.2" }} />
        <Grid container>
          <Grid item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem primary={"Authors"} />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem primary={authors(selectedBook[0])} />
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ border: 1, opacity: "0.2" }} />
        <Grid container>
          <Grid item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem primary={"downloads"} />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem primary={selectedBook[0].download_count} />
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ border: 1, opacity: "0.2" }} />
        <Grid container>
          <Grid item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem primary={"bookshelves"} />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem
                primary={selectedBook[0].bookshelves.join(",")}
              />
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ border: 1, opacity: "0.2" }} />
        <Grid container>
          <Grid item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem primary={"subjects"} />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <ListItem>
              <StyledBookListItem
                primary={selectedBook[0].subjects.join(",")}
              />
            </ListItem>
          </Grid>
        </Grid>
      </Box>
      <Grid item>
        <Button
          sx={{ backgroundColor: "rgba(31, 28, 26, 0.6)", color: "black" }}
          variant='text'
          onClick={goToBookList}
        >
          Back
        </Button>
      </Grid>
    </MainLayout>
  ) : (
    <MainLayout>
      <SnackBarError errorMessage={errorMessage} />
      <CircularProgress size={50} />
    </MainLayout>
  );
};
export default BookDetails;
