import { Grid, Grow, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";

import ToggleDarkMode from "./ToggleDarkMode";
import Profile from "./Profile";
import Links from "./Links/";
import useStyles from "./styles";
import FeedbackMsg from "../Helpers/FeedbackMsg";

const NavBar = ({ setDarkMode, darkMode }) => {
  const classes = useStyles();
  const { auth, community } = useSelector((state) => state);

  return (
    <>
      {auth.message.content && (
        <FeedbackMsg
          message={auth.message.content}
          severity={auth.message.type}
        />
      )}
      {community.message.content && (
        <FeedbackMsg
          message={community.message.content}
          severity={community.message.type}
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
            {auth.isLoggedIn && (
              <>
                <Links classes={classes} />
                <Profile classes={classes} userData={auth.data} />
              </>
            )}
          </Grid>
        </Grid>
      </Grow>
    </>
  );
};

export default NavBar;
