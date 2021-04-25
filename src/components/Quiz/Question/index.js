import { useState, memo } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Typography,
  Paper,
  Divider,
} from "@material-ui/core";

const Question = ({
  question,
  classes,
  questionNumber,
  setUserAnswers,
  userAnswers,
  index,
  color,
}) => {
  const [checked, setChecked] = useState(-1);
  const handleToggle = (optionIndex, optionId) => {
    setChecked(optionIndex);
    userAnswers[index].userAnswer = optionId;
    setUserAnswers([...userAnswers]);
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
          {question.mainText}
        </Typography>
      </div>
      <Divider />
      {question.options.map((option, optionIndex) => {
        const labelId = `checkbox-list-label-${option._id}`;

        return (
          <ListItem
            key={option._id}
            role={undefined}
            dense
            button
            onClick={() => handleToggle(optionIndex, option._id)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={optionIndex === checked}
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
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default memo(Question);
