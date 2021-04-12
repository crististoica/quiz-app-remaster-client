import { useState } from "react";
import { IconButton, MenuItem, Menu } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const MobileMenu = ({
  classes,
  isLocked,
  setOpenConfirmRemove,
  setOpenEdit,
  setOpenConfirmToggleLock,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.topicMobileMenu}>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            setOpenConfirmRemove(true);
            handleClose();
          }}
        >
          <DeleteIcon /> Remove
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenEdit(true);
            handleClose();
          }}
        >
          <EditIcon /> Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenConfirmToggleLock(true);
            handleClose();
          }}
        >
          {isLocked ? (
            <>
              <LockIcon style={{ color: "#C44536" }} /> Unlock
            </>
          ) : (
            <>
              <LockOpenIcon style={{ color: "#3E885B" }} /> Lock
            </>
          )}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MobileMenu;
