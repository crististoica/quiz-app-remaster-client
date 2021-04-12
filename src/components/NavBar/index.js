import { Grid, Grow, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";

import ToggleDarkMode from "./ToggleDarkMode";
import Profile from "./Profile";
import Links from "./Links/";
import useStyles from "./styles";
import FeedbackMsg from "../Helpers/FeedbackMsg";

const NavBar = ({ setDarkMode, darkMode }) => {
  const classes = useStyles();
  const userData = useSelector((state) => state.auth);

  return (
    <>
      {userData.message.content && (
        <FeedbackMsg
          message={userData.message.content}
          severity={userData.message.type}
        />
      )}
      <Grow in>
        <Grid container spacing={0} justify="center">
          <Grid item className={classes.appBar} component={Paper}>
            <ToggleDarkMode
              setDarkMode={setDarkMode}
              darkMode={darkMode}
              classes={classes}
            />
            {userData.isLoggedIn && (
              <>
                <Links classes={classes} />
                <Profile classes={classes} userData={userData} />
              </>
            )}
          </Grid>
        </Grid>
      </Grow>
    </>
  );
};

export default NavBar;
