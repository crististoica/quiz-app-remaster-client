import { useSelector } from "react-redux";
import { Grid, Paper, Typography } from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import TimerIcon from "@material-ui/icons/Timer";

const ResultInfo = ({ classes, infos }) => {
  const quizImg = useSelector(
    (state) => state.quiz.currentQuizSettings.quizImg
  );
  const totalScore = infos.score;

  return (
    <Grid item xs={12}>
      <Paper className={classes.quizResult}>
        <div className={classes.quizTypeContainer}>
          <img className={classes.quizInfoImg} src={quizImg} alt="quiz_type" />

          <Typography variant="h5" style={{ color: infos.color }}>
            {infos.type}
          </Typography>
        </div>
        <div
          className={classes.divider}
          style={{ backgroundColor: infos.color }}
        ></div>
        <Typography
          variant="h5"
          className={classes.resultIconCont}
          style={{ color: infos.color }}
        >
          <GradeIcon />
          {totalScore}
        </Typography>

        <Typography
          variant="h5"
          className={classes.resultIconCont}
          style={{ color: infos.color }}
        >
          <TimerIcon />
          {`${infos.time.hours} : ${infos.time.minutes} : ${infos.time.seconds}`}
        </Typography>
        <Typography
          variant="h5"
          className={classes.resultIconCont}
          style={{ color: infos.color }}
        >
          <CalendarTodayIcon />
          {new Date(infos.date).toLocaleString()}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ResultInfo;
