import { useState } from "react";
import { Grid } from "@material-ui/core";

import AccordionComponent from "../../../Common/AccordionComponent";
import QuizSelectCard from "components/Dashboard/QuizSelect/QuizSelectCard";
import Form from "./Form";

const AddQuiz = ({ classes }) => {
  const [quizInfos, setQuizInfos] = useState({
    name: "",
    img: "",
    color: "#D81E5B",
    numOfQuestion: 9,
    key: "",
  });

  return (
    <AccordionComponent title="Add Quiz">
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <QuizSelectCard
            title={quizInfos.name}
            imgSrc={quizInfos.img}
            color={quizInfos.color}
            num={quizInfos.numOfQuestion}
          />
        </Grid>
        <Grid item md={9} xs={12}>
          <Form
            classes={classes}
            quizInfos={quizInfos}
            setQuizInfos={setQuizInfos}
          />
        </Grid>
      </Grid>
    </AccordionComponent>
  );
};

export default AddQuiz;
