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
  data,
  classes,
  color,
  questionNumber,
  index,
  dataKey,
  setUserAnswers,
  userAnswers,
}) => {
  const [checked, setChecked] = useState(-1);

  const handleToggle = (optionIndex, optionId) => {
    setChecked(optionIndex);
    const temp = [...userAnswers[dataKey]];
    temp[index].userAnswer = optionId;
    setUserAnswers((prevProgress) => ({
      ...prevProgress,
      [dataKey]: [...temp],
    }));
  };

  console.log(color);
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
      </div>
      <Divider />
      {data.options.map((option, optionIndex) => {
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
