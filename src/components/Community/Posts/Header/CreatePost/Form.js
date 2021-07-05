import { useState } from "react";
import { Paper, Grid, TextField, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { createNormalPost } from "redux/actions/community";
import { COMMUNITY_ERROR, CLEAR_COMMUNITY_MSG } from "redux/types/community";

const Form = ({ classes, icon: Icon }) => {
  const dispatch = useDispatch();
  const { topic } = useParams();
  const { currentTopic } = useSelector((state) => state.community);
  const [postInfos, setPostInfos] = useState({
    title: "",
    content: "",
    topicId: currentTopic._id,
    color: currentTopic.color,
    topicSlug: topic,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: CLEAR_COMMUNITY_MSG });
    if (postInfos.title.length < 4) {
      return dispatch({
        type: COMMUNITY_ERROR,
        payload: { message: "SOME TEST MESSAGE FROM CLIENT SIDE ABOUT TITLE" },
      });
    }
    if (postInfos.content.length < 4) {
      return dispatch({
        type: COMMUNITY_ERROR,
        payload: { message: "SOME TEST MESSAGE FROM CLIENT SIDE" },
      });
    }
    dispatch(createNormalPost(postInfos));
  };

  return (
    <Paper className={classes.formPaper}>
      <div className={classes.formTitle}>
        <Icon color="secondary" fontSize="large" />
        <Typography variant="h5" color="secondary">
          Create Post
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="title"
              type="text"
              label="Title"
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setPostInfos({ ...postInfos, title: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <textarea
              className={classes.creatPostTxtArea}
              placeholder="Content"
              onChange={(e) =>
                setPostInfos({ ...postInfos, content: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              fullWidth
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
