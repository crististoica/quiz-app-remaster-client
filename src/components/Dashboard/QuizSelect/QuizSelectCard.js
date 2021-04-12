import { useDispatch } from "react-redux";
import { Typography, Paper, CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { getQuiz } from "../../../redux/actions/quiz";
import useStyles from "../styles";

const QuizSelectCard = ({ title, imgSrc, color, num, path }) => {
  const key = title.toLowerCase().split(" ").join("-");
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleQuiz = () =>
    dispatch(
      getQuiz(
        {
          key: key,
          quizType: title,
          quizImg: imgSrc,
        },
        color
      )
    );

  if (path) {
    return (
      <Paper>
        <Link to={`/quiz/${path}`} className={classes.cardLink}>
          <CardActionArea
            className={classes.quizSelectCard}
            style={{ color: color }}
            onClick={handleQuiz}
          >
            <img className={classes.cardImage} src={imgSrc} alt={title} />
            <div className={classes.controls}>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="body2">{num} questions</Typography>
            </div>

            <ArrowForwardIosIcon className={classes.cardNavBtn} />
          </CardActionArea>
        </Link>
      </Paper>
    );
  }

  return (
    <Paper>
      <CardActionArea
        className={classes.quizSelectCard}
        style={{ color: color }}
      >
        <img className={classes.cardImage} src={imgSrc} alt="quiz_img" />
        <div className={classes.controls}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2">{num} questions</Typography>
        </div>

        <ArrowForwardIosIcon className={classes.cardNavBtn} />
      </CardActionArea>
    </Paper>
  );
};

export default QuizSelectCard;
