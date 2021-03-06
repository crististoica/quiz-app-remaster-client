import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

import Question from "./Question";
import QuizInfo from "./QuizInfo";
import Loading from "Routes/Loading";

import { verifyQuiz } from "redux/actions/quiz";
import { getTopic } from "redux/actions/community";

import useStyles from "./styles";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [time, setTime] = useState({
    hours: "0",
    minutes: "00",
    seconds: "00",
    secondsElapsed: 0,
  });
  const { quiz } = useSelector((state) => state);
  const { currentTopic } = useSelector((state) => state.community);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { quizType: topic } = useParams();
  let questionNumber = 1;

  const handleSubmit = async () => {
    const progress = {
      userAnswers,
      time,
      date: Date.now(),
      color: quiz.currentQuizSettings.color,
      type: quiz.currentQuizSettings.type,
      quizId: quiz.data._id,
    };
    dispatch(verifyQuiz(progress, time));
    history.push(`/quiz/${quiz.data.slug}/result`);
  };

  useEffect(() => {
    setUserAnswers([
      ...quiz.data.questions.map((question) => ({
        questionIndex: question.index,
        questionId: question._id,
        userAnswer: "",
      })),
    ]);
  }, [quiz.data.questions]);

  useEffect(() => {
    if (quiz.data.questions.length === 0 && !quiz.isLoading) {
      history.push("/dashboard");
    }
  }, [quiz.data, history, quiz.isLoading]);

  useEffect(() => {
    window.onbeforeunload = (e) => {
      e.preventDefault();
      console.log("BACK BUTTON");
      e.returnValue = "";
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, [dispatch]);

  useEffect(() => {
    if (currentTopic.slug === topic) {
      return dispatch(getTopic(topic, currentTopic));
    }
    return dispatch(getTopic(topic));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <QuizInfo quiz={quiz} classes={classes} time={time} setTime={setTime} />
      {quiz.data.questions.map((question, index) => {
        return (
          <Grid item xs={12} key={question._id}>
            <Question
              question={question}
              classes={classes}
              color={quiz.currentQuizSettings.color}
              questionNumber={questionNumber++}
              setUserAnswers={setUserAnswers}
              userAnswers={userAnswers}
              index={index}
            />
          </Grid>
        );
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
