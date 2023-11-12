import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { useBooks } from "../context";
import { FC } from "react";
import { Divider, styled } from "@mui/material";
import { StyledDrawer, StyledListItemText } from "../Components/styled";

interface FavoriteCardProps {
  isCartOpen: boolean;
  toggleCart: () => void;
}

const FavoriteCard: FC<FavoriteCardProps> = ({ isCartOpen, toggleCart }) => {
  const { likedBooks } = useBooks();

  const cartItems = likedBooks?.map((book) => (
    <>
      <ListItem key={book.id}>
        <StyledListItemText>{book.title} </StyledListItemText>
      </ListItem>
      <Divider sx={{ border: 2, opacity: 0.5 }} />
    </>
  ));

  return (
    <StyledDrawer anchor='right' open={isCartOpen} onClose={toggleCart}>
      <Box role='slider' onClick={toggleCart} onKeyDown={toggleCart}>
        <Typography variant='h6' gutterBottom>
          Favourites
        </Typography>
        <List>{cartItems}</List>
      </Box>
    </StyledDrawer>
  );
};

export default FavoriteCard;
