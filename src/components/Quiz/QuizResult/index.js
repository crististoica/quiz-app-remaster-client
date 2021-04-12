import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import ResultQuestion from "./ResultQuestion";
import ResultInfo from "./ResultInfo";
import Loading from "Routes/Loading";
import useStyles from "../styles";

const QuizResult = ({ historyResult }) => {
  const quiz = useSelector((state) => historyResult || state.quiz);
  const history = useHistory();
  const classes = useStyles();
  const entries = quiz.result.entries; // { BD: { ... }, POO: { ... } ....}
  let questionNumber = 1;

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      if (history.action === "POP") {
        history.push("/dashboard");
      }
    };
  }, [history]);

  useEffect(() => {
    if (Object.keys(quiz.result.entries).length === 0 && !quiz.isLoading) {
      history.push("/dashboard");
    }
  }, [quiz, history]);

  if (quiz.isLoading) {
    return <Loading />;
  }

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      className={classes.quizContainer}
    >
      <Grid item xs={12}>
        <ResultInfo infos={quiz.result} classes={classes} />
      </Grid>

      {Object.keys(entries).map((key) => {
        return entries[key].data.map((entry) => {
          return (
            <Grid item xs={12} key={entry.questionNumber + entry.index}>
              <ResultQuestion
                classes={classes}
                questionNumber={questionNumber++}
                color={quiz.currentQuizSettings.color}
                data={entry}
                entryKey={key}
              />
            </Grid>
          );
        });
      })}
    </Grid>
  );
};

export default QuizResult;
