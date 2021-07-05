import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Grow, Typography } from "@material-ui/core";

import { getOnePost } from "redux/actions/community";
import Loading from "Routes/Loading";
import NotFound from "components/Helpers/NotFound";
import useStyles from "../../styles";
import PostHead from "./PostHead";
import AddReply from "./AddReply";
import Reply from "./Reply";

const Post = () => {
  const { topic, post } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { currentPost, isLoading, currentTopic } = useSelector(
    (state) => state.community
  );

  useEffect(() => {
    dispatch(getOnePost(topic, post));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!currentPost || !currentPost.author) {
    return <NotFound />;
  }

  return (
    <Grow in>
      <Grid
        container
        spacing={2}
        justify="center"
        className={classes.postWReplies}
      >
        <Grid item xs={12}>
          <PostHead
            classes={classes}
            data={currentPost}
            color={currentTopic.color}
            postAuthorId={currentPost.author._id}
            isClosed={currentPost.isClosed}
          />
        </Grid>
        <Grid item xs={12}>
          {currentPost.replies.length === 0 && (
            <Typography
              variant="h4"
              align="center"
              className={classes.noReplies}
            >
              No Replies Yet
            </Typography>
          )}
        </Grid>
        <Grid item sm={3} xs={6}>
          <AddReply classes={classes} />
        </Grid>
        {currentPost.replies.map((reply) => {
          return (
            <Grid item xs={12} key={reply._id}>
              <Reply
                classes={classes}
                data={reply}
                color={currentTopic.color}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};

export default Post;
