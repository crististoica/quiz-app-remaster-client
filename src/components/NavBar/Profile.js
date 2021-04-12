import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { SIGN_OUT } from "redux/types/auth";

const Profile = ({ classes, userData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    dispatch({ type: SIGN_OUT });
  };

  return (
    <div className={classes.iconWText}>
      <Typography variant="body1">{`${userData.data.firstName} ${userData.data.lastName}`}</Typography>
      <IconButton
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar alt={userData.data.firstName} />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
