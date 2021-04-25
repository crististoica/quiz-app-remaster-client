import { useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";

const QuizInfo = ({ quiz, classes, time, setTime }) => {
  const quizImg = quiz.currentQuizSettings.quizImg;

  useEffect(() => {
    let interval = null;
    if (!quiz.isLoading) {
      interval = setInterval(() => {
        setTime((prevTime) => ({
          hours: Math.floor(prevTime.secondsElapsed / 3600),
          minutes: (
            "0" + Math.floor((prevTime.secondsElapsed / 60) % 60)
          ).slice(-2),
          seconds: ("0" + ((Number(prevTime.secondsElapsed) + 1) % 60)).slice(
            -2
          ),
          secondsElapsed: prevTime.secondsElapsed + 1,
        }));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [quiz.isLoading, setTime]);

  return (
    <Grid item xs={12}>
      <Paper className={classes.quizInfo}>
        <div className={classes.quizTypeContainer}>
          <img className={classes.quizInfoImg} src={quizImg} alt="quiz_type" />

          <Typography
            variant="h5"
            style={{ color: quiz.currentQuizSettings.color }}
          >
            {quiz.currentQuizSettings.type}
          </Typography>
        </div>
        <Typography
          variant="h5"
          className={classes.timer}
          style={{ color: quiz.currentQuizSettings.color }}
        >
          <TimerIcon />
          {`${time.hours} : ${time.minutes} : ${time.seconds}`}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default QuizInfo;
