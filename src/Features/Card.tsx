import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function FavoriteCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        alignSelf: "flex-end",
      }}
    ></Card>
  );
}
