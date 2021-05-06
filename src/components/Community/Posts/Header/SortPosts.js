import { useState } from "react";
import { IconButton, Button, Menu, MenuItem } from "@material-ui/core";

import SortIcon from "@material-ui/icons/Sort";

const MobileMenu = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.mobile}
      >
        <SortIcon />
      </IconButton>

      <Button
        variant="outlined"
        color="secondary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<SortIcon />}
        className={classes.desktop}
      >
        Sort By
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Newest</MenuItem>
        <MenuItem>Oldest</MenuItem>
      </Menu>
    </div>
  );
};

export default MobileMenu;
