import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CustomDialog, dialogOpenSubject$ } from "../CustomDialog";
import { FavoriteTable } from "./FavoriteTable";

export const Navbar = () => {

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  }

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Happy Test App - Gentleman Programing
          </Typography>
          <IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
