import { useState } from "react";
import Grid from "@mui/material/Grid";

import { CircularProgress } from "@mui/material";
import FormTextField from "../Components/FormTextField";
import useBooksServices from "../books.services";

const PersonalReference = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchedBook, setSearchedBook] = useState("");
  const { searchBook } = useBooksServices();

  const searchBookHandler = (value: string) => {
    setSearchedBook(value);
    searchBook(value, setIsSearching);
  };

  return (
    <Grid item>
      <FormTextField
        id='search-book'
        margin='none'
        value={searchedBook}
        onChange={(value) => {
          searchBookHandler(value);
        }}
        InputProps={{
          endAdornment: isSearching && <CircularProgress size={20} />,
        }}
      />
    </Grid>
  );
};

export default PersonalReference;
