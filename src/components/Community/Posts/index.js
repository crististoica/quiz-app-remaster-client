import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Grow, Typography } from "@material-ui/core";

import { getTopic } from "redux/actions/community";
import Loading from "Routes/Loading";
import Header from "./Header";
import PostCard from "./PostCard";
import NotFound from "components/Helpers/NotFound";

import useStyles from "../styles";

const Posts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { community } = useSelector((state) => state);
  const { topic } = useParams();

  useEffect(() => {
    if (community.isLoaded) {
      const currentTopic = community.data.find((entry) => entry.slug === topic);

      dispatch(getTopic(topic, currentTopic));
    } else {
      dispatch(getTopic(topic));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (community.isLoading) {
    return <Loading />;
  }

  if (!community.currentTopic) {
    return <NotFound />;
  }

  return (
    <Grow in>
      <Grid container spacing={2} className={classes.root}>
        <Header classes={classes} currentTopic={community.currentTopic} />
        <Grid item xs={12}>
          {community.currentTopic.posts.length === 0 && (
            <Typography variant="h5" className={classes.noPosts}>
              No Posts Yet
            </Typography>
          )}
        </Grid>
        {community.currentTopic.posts.map((post) => {
          return (
            <PostCard
              key={post._id}
              classes={classes}
              title={post.title}
              author={post.author}
              createdOn={post.createdOn}
              isClosed={post.isClosed}
              color={community.currentTopic.color}
              slug={post.slug}
            />
          );
        })}
      </Grid>
    </Grow>
  );
};

export default Posts;
