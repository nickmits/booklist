import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useBooks } from "../context";

export default function Appbar() {
  const { likedBooks } = useBooks();

  return (
    <AppBar component='nav' position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Bookstore
        </Typography>
        <IconButton size='large' aria-label={`${1}`} color='inherit'>
          <Badge badgeContent={likedBooks?.length} color='error'>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
