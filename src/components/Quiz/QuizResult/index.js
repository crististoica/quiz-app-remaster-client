import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import ResultQuestion from "./ResultQuestion";
import ResultInfo from "./ResultInfo";
import Loading from "Routes/Loading";
import useStyles from "../styles";

const QuizResult = ({ historyResult }) => {
  const [communityQuestion, setCommunityQuestion] = useState({});
  const quiz = useSelector((state) => historyResult || state.quiz);
  const history = useHistory();
  const classes = useStyles();
  let questionNumber = 1;

  console.log(communityQuestion);
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      if (history.action === "POP") {
        history.push("/dashboard");
      }
    };
  }, [history]);

  useEffect(() => {
    if (quiz.result.data.length === 0 && !quiz.isLoading) {
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

      {quiz.result.data.map((entry) => {
        return (
          <Grid item xs={12} key={entry._id}>
            <ResultQuestion
              classes={classes}
              questionNumber={questionNumber++}
              color={quiz.currentQuizSettings.color}
              data={entry}
              setCommunityQuestion={setCommunityQuestion}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default QuizResult;
