import { useEffect } from "react";
import { Grid, Grow } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import QuizSelect from "./QuizSelect";
import FeedbackMsg from "components/Helpers/FeedbackMsg";

import { getQuizes } from "redux/actions/quiz";
import { RESET_QUIZ_SETTINGS } from "redux/types/quiz";

import useStyles from "./styles";

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { dashboardCards, message } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch({ type: RESET_QUIZ_SETTINGS });
    if (!dashboardCards.length) {
      dispatch(getQuizes());
    }
  }, [dashboardCards, dispatch]);

  return (
    <>
      {message.content && (
        <FeedbackMsg message={message.content} severity={message.type} />
      )}
      <Grow in>
        <Grid
          container
          spacing={2}
          className={classes.dashboardContainer}
          justify="center"
        >
          <Grid item md={6} xs={12}>
            <QuizSelect classes={classes} />
          </Grid>
          {/* <Grid item md={6} xs={12}>
            <History classes={classes} />
          </Grid> */}
        </Grid>
      </Grow>
    </>
  );
};

export default Dashboard;
