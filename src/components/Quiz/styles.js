import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  questionTextContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    fontSize: "1em",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      fontSize: ".7em",
    },
  },
  questionText: {
    width: "100%",
    fontSize: "1.3em",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  questionIndex: {
    marginRight: theme.spacing(2),
  },
  questionNumber: {
    alignSelf: "flex-end",
    padding: theme.spacing(1),
  },
  quizContainer: {
    marginTop: theme.spacing(2),
    overflow: "auto",
  },
  optionText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9em",
    },
  },
  quizInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  quizResult: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  timer: {
    display: "flex",
    alignItems: "center",
    "& > *:first-child": {
      marginRight: theme.spacing(1),
    },
  },
  resultIconCont: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
    "& > *:first-child": {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9em",
      alignSelf: "flex-start",
    },
  },
  quizInfoImg: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: 30,
      height: 30,
    },
  },
  quizTypeContainer: {
    display: "flex",
    alignItems: "center",
  },
  wrong: {
    border: "1px solid red",
    backgroundColor: "rgba(170, 0, 0, 0.1)",
  },
  correct: {
    border: "1px solid green",
    backgroundColor: "rgba(0, 170, 0, 0.1)",
  },
  wrongAnswer: {
    color: "red",
  },
  correctAnswer: {
    color: "green",
  },
  divider: {
    display: "none",
    height: 2,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  resultActions: {
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "2px solid",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      justifyContent: "center",
      border: "none",
      borderTop: "2px solid",
      marginTop: theme.spacing(1),
    },
  },
  createQuizPostContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  quizPostAddHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "& > div": {
      display: "flex",
      alignItems: "center",
    },
  },
  createQuizPostContent: {
    width: "97.5%",
    height: "20ch",
    resize: "none",
    padding: theme.spacing(2),
  },
}));

export default useStyles;
