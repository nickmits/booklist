import { Box, Grid } from "@mui/material";
import { FC } from "react";

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{
        backgroundColor: "rgb(234, 237, 242)",
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
