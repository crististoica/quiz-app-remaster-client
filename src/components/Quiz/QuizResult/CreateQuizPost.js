import { useState } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import PostAddIcon from "@material-ui/icons/PostAdd";
import CancelIcon from "@material-ui/icons/Cancel";

import ResultQuestion from "./ResultQuestion";

import { createQuizPost } from "redux/actions/community";

const CreateQuizPost = ({ classes, color, handleClose, communityQuestion }) => {
  const [quizPostContent, setQuizPostContent] = useState("");
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.quiz.data);

  const handleSubmit = () => {
    dispatch(
      createQuizPost({
        color: color,
        quizId: _id,
        questionId: communityQuestion._id,
        questionContent: communityQuestion,
        content: quizPostContent,
      })
    );
  };

  return (
    <Grid item xs={12} className={classes.createQuizPostContainer}>
      <Grid container spacing={2} justify="center">
        <Grid
          item
          xs={12}
          style={{ color: color }}
          className={classes.quizPostAddHeader}
        >
          <div>
            <PostAddIcon fontSize="large" />
            <Typography variant="h4">Create Post</Typography>
          </div>
          <IconButton onClick={handleClose}>
            <CancelIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <ResultQuestion
            questionNumber={communityQuestion.questionNumber}
            color={color}
            data={communityQuestion}
            isForCommunityPost
          />
        </Grid>
        <Grid item xs={12}>
          <textarea
            placeholder="Content (10 chars min)"
            className={classes.createQuizPostContent}
            onChange={(e) => setQuizPostContent(e.target.value)}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSubmit}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateQuizPost;
