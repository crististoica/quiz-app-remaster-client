import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Typography,
  Paper,
  Divider,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import PostAddIcon from "@material-ui/icons/PostAdd";

const ResultQuestion = ({ classes, questionNumber, color, data, entryKey }) => {
  const handleCommunityPost = () => {
    console.log(entryKey);
  };

  return (
    <List
      className={classes.root}
      component={Paper}
      style={{ borderTop: `2px solid ${color}` }}
    >
      <div className={classes.questionTextContainer}>
        <Typography variant="body1" className={classes.questionText}>
          <span className={classes.questionIndex} style={{ color: color }}>
            {`${questionNumber} )`}
          </span>
          {data.question}
        </Typography>
        <div className={classes.resultActions} style={{ color: color }}>
          <Tooltip title="Original Question Number (from PDF)">
            <div className="icon-container md-4" style={{ fontSize: 16 }}>
              <PictureAsPdfIcon />
              {`${entryKey} - ${data.questionNumber}`}
            </div>
          </Tooltip>
          <IconButton onClick={handleCommunityPost}>
            <PostAddIcon color="secondary" />
          </IconButton>
        </div>
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
            button
            className={classes[listItemClass]}
          >
            <ListItemIcon>
              <Checkbox
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
