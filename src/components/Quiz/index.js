import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Question from "./Question";
import Placeholder from "./Question/Placeholder";
import QuizInfo from "./QuizInfo";

import { verifyQuiz } from "redux/actions/quiz";

import useStyles from "./styles";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [time, setTime] = useState({
    hours: "0",
    minutes: "00",
    seconds: "00",
    secondsElapsed: 0,
  });
  const { quiz } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  let questionNumber = 1;

  const handleSubmit = async () => {
    const progress = {
      userAnswers,
      time,
      date: Date.now(),
      color: quiz.currentQuizSettings.color,
      type: quiz.currentQuizSettings.type,
    };
    dispatch(verifyQuiz(progress, time));
    const key = quiz.currentQuizSettings.key.split(" ").join("-");
    history.push(`/quiz/${key}/result`);
  };

  useEffect(() => {
    /*
      progres: {
        "POO": [{ index: Number, answer: "" } .... ],
        "BD": [{ index: Number, answer: ""} .... ],
        ...........
      }
    */
    setUserAnswers(
      Object.assign(
        {},
        ...Object.keys(quiz.data).map((key) => ({
          [key]: quiz.data[key].map((entry) => ({
            index: entry.index,
            userAnswer: "",
          })),
        }))
      )
    );
  }, [quiz.data]);

  useEffect(() => {
    if (quiz.data.length === 0 && !quiz.isLoading) {
      history.push("/dashboard");
    }
  }, [quiz.data, history, quiz.isLoading]);

  useEffect(() => {
    window.onbeforeunload = (e) => {
      e.preventDefault();
      // chrome
      e.returnValue = "";
    };

    return () => (window.onbeforeunload = null);
  }, []);

  if (quiz.isLoading) {
    return <h1>LOADING</h1>;
  }

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      className={classes.quizContainer}
    >
      <QuizInfo quiz={quiz} classes={classes} time={time} setTime={setTime} />
      {Object.keys(quiz.data).map((key) => {
        return quiz.data[key].map((question, index) => {
          return quiz.isLoading ? (
            <Grid key={question.questionNumber} item xs={12}>
              <Placeholder />
            </Grid>
          ) : (
            <Grid key={question.questionNumber} item xs={12}>
              <Question
                data={question}
                classes={classes}
                color={quiz.currentQuizSettings.color}
                questionNumber={questionNumber++}
                index={index}
                dataKey={key}
                setUserAnswers={setUserAnswers}
                userAnswers={userAnswers}
              />
            </Grid>
          );
        });
      })}
      <Grid item md={6} xs={12}>
        <Button
          variant="contained"
          style={{
            backgroundColor: quiz.currentQuizSettings.color,
            marginBottom: 8,
          }}
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Quiz;
