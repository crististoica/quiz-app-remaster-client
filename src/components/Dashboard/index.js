import { useEffect } from "react";
import { Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

import QuizSelect from "./QuizSelect";
import History from "./History";

import { getQuizes } from "redux/actions/quiz";
import { RESET_QUIZ_SETTINGS } from "redux/types/quiz";

import useStyles from "./styles";

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: RESET_QUIZ_SETTINGS });
    dispatch(getQuizes());
  }, [dispatch]);

  return (
    <Grow in>
      <Grid container spacing={2} className={classes.dashboardContainer}>
        <Grid item md={6} xs={12}>
          <QuizSelect classes={classes} />
        </Grid>
        <Grid item md={6} xs={12}>
          <History classes={classes} />
        </Grid>
      </Grid>
    </Grow>
  );
};

export default Dashboard;
