import { Grid } from "@mui/material";
import { FC } from "react";
import background from "../images/background.png";

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{
        backgroundColor: "rgba(116, 59, 34, 0.3)",
        // backgroundImage: `url(${background})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "contain",
        // width: "100%",
      }}
      flexDirection={"column"}
      spacing={1}
      display={"flex"}
      minHeight={"100vh"}
      textAlign='center'
      alignContent='center'
    >
      {children}
    </Grid>
  );
};
export default MainLayout;
