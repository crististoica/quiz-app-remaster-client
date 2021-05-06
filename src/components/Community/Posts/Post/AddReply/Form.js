import { useState } from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createReply } from "redux/actions/community";

const Form = ({ classes, icon: Icon }) => {
  const [replyInfos, setReplyInfos] = useState({
    content: "",
  });
  const { post } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReply(replyInfos, post));
  };

  return (
    <Paper className={classes.formPaper}>
      <div className={classes.formTitle}>
        <Icon color="secondary" fontSize="large" />
        <Typography variant="h5" color="secondary">
          Reply
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <textarea
              className={classes.creatPostTxtArea}
              placeholder="Content"
              onChange={(e) =>
                setReplyInfos({ ...replyInfos, content: e.target.value })
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
