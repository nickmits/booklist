import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useState, FC } from "react";
import { useBooks } from "../context";
import { StyledSnackbarContent } from "./styled";

const SnackBarError: FC<{ errorMessage: string }> = ({ errorMessage }) => {
  const { openSnackbar, setOpenSnackbar } = useBooks();

  const [state] = useState<SnackbarOrigin>({
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Snackbar
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}
      open={openSnackbar}
      key={vertical + horizontal}
    >
      <StyledSnackbarContent message={errorMessage} />
    </Snackbar>
  );
};

export default SnackBarError;
