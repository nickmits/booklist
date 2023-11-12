import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useBooks } from "../context";
import FavoriteCard from "../Features/Card";

export default function Appbar() {
  const { likedBooks } = useBooks();
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "rgba(73, 55, 47, 0.3)" }}
        component='nav'
        position='fixed'
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              textAlign: "center",
              color: "rgba(80, 64, 51, 0.8)",
            }}
          >
            Bookstore
          </Typography>
          <IconButton
            onClick={toggleCart}
            size='large'
            aria-label={`${likedBooks?.length}`}
            color='default'
          >
            <Badge badgeContent={likedBooks?.length} color='error'>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {isCartOpen && (
        <FavoriteCard isCartOpen={isCartOpen} toggleCart={toggleCart} />
      )}
    </>
  );
}
