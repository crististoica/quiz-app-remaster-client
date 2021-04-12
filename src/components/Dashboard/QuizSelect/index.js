import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import QuizSelectCard from "./QuizSelectCard";

const QuizSelect = () => {
  const { dashboardCards } = useSelector((state) => state.quiz);

  return (
    <Grid container spacing={2}>
      {dashboardCards.map((quiz) => {
        return (
          <Grid item xs={12} key={quiz._id}>
            <QuizSelectCard
              title={quiz.name}
              imgSrc={`${process.env.REACT_APP_API_URL}/${quiz.img}`}
              color={quiz.color}
              num={quiz.numOfQuestions}
              path
            />
          </Grid>
        );
      })}
      {/* <Grid item xs={12}>
        <QuizSelectCard
          title="Java"
          imgSrc={quizImages["Java"]}
          color={quizColors["Java"]}
          num={9}
        />
      </Grid>
      <Grid item xs={12}>
        <QuizSelectCard
          title="Networks"
          imgSrc={quizImages["Networks"]}
          color={quizColors["Networks"]}
          num={9}
        />
      </Grid>
      <Grid item xs={12}>
        <QuizSelectCard
          title="Databases"
          imgSrc={quizImages["Databases"]}
          color={quizColors["Databases"]}
          num={9}
        />
      </Grid>
      <Grid item xs={12}>
        <QuizSelectCard
          title="Real Test"
          imgSrc={quizImages["Real Test"]}
          color={quizColors["Real Test"]}
          num={18}
        />
      </Grid> */}
    </Grid>
  );
};

export default QuizSelect;
