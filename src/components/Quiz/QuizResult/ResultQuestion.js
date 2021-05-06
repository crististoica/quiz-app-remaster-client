import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Typography,
  Paper,
  Divider,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";
import LabelIcon from "@material-ui/icons/Label";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import useStyles from "../styles";

const ResultQuestion = ({
  questionNumber,
  color,
  data,
  handleCommunityPost,
  isForCommunityPost,
  isLocked,
}) => {
  const { currentTopic } = useSelector((state) => state.community);
  const { quizType } = useParams();
  const post = currentTopic.posts.find((p) => p.questionId === data._id);
  const classes = useStyles();
  const elev = isForCommunityPost ? 0 : 1;

  return (
    <List
      className={classes.root}
      component={Paper}
      style={{ borderTop: `2px solid ${color}` }}
      elevation={elev}
    >
      <div className={classes.questionTextContainer}>
        <Typography variant="body1" className={classes.questionText}>
          <span className={classes.questionIndex} style={{ color: color }}>
            {`${questionNumber} )`}
          </span>
          {data.mainText}
        </Typography>
        {!isForCommunityPost && (
          <div className={classes.resultActions} style={{ color: color }}>
            {data.questionNumber && (
              <Tooltip title="Original Question Number.">
                <div
                  className={classes.quizTypeContainer}
                  style={{ color: color }}
                >
                  <LabelIcon />
                  <p>{data.questionNumber}</p>
                </div>
              </Tooltip>
            )}
            {!isLocked && !post && (
              <Tooltip title="Create Community Post">
                <IconButton onClick={() => handleCommunityPost(data)}>
                  <PostAddIcon style={{ color: color }} />
                </IconButton>
              </Tooltip>
            )}
            {post && (
              <Tooltip title="Open new tab and go to community post.">
                <Link
                  target="_blank"
                  to={`/community/${quizType}/${post.slug}`}
                >
                  <IconButton>
                    <ExitToAppIcon style={{ color: color }} />
                  </IconButton>
                </Link>
              </Tooltip>
            )}
          </div>
        )}
      </div>
      <Divider />
      {data.options.map((option) => {
        const labelId = `checkbox-list-label-${option._id}`;
        let answerText = "";
        let answerClass = null;
        let listItemClass = null;
        if (option._id === data.userAnswer && data.answeredCorrectly) {
          answerText = " | Your Answer (+1)";
          answerClass = "correctAnswer";
          listItemClass = "correct";
        } else if (option._id === data.userAnswer) {
          answerText = " | Your Answer (-1)";
          answerClass = "wrongAnswer";
          listItemClass = "wrong";
        } else if (
          option._id === data.correctAnswer &&
          !data.answeredCorrectly
        ) {
          answerText = " | Correct Answer";
          answerClass = "correctAnswer";
          listItemClass = "correct";
        }
        return (
          <ListItem
            key={option._id}
            role={undefined}
            dense
            className={classes[listItemClass]}
          >
            <ListItemIcon>
              <Checkbox
                disabled
                edge="start"
                checked={
                  option._id === data.correctAnswer ||
                  option._id === data.userAnswer
                }
                tabIndex={-1}
                style={{ color: color }}
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={
                <Typography variant="h6" className={classes.optionText}>
                  {option.text}
                  <br />
                  <span
                    className={classes[answerClass]}
                  >{`${answerText}`}</span>
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ResultQuestion;
