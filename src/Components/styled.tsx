import {
  Divider,
  Grid,
  ListItemText,
  SnackbarContent,
  Typography,
  styled,
  Drawer,
} from "@mui/material";

export const StyledBookListItem = styled(ListItemText)({
  textAlign: "center",
});

export const StyledSnackbarContent = styled(SnackbarContent)({
  backgroundColor: "bisque",
  textAlign: "center",
  display: "flex",
  color: "black",
  justifyContent: "center",
});

export const StyledDivider = styled(Divider)({
  border: 1,
  opacity: "0.2",
});

export const StyledListItemText = styled(Typography)({
  overflowWrap: "break-word",
  inlineSize: "150px",
});

export const StyledDrawer = styled(Drawer)({
  "& .MuiPaper-root": {
    backgroundColor: "rgba(211, 130, 66, 0.8)",
  },
});
