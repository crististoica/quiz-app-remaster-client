import { useEffect } from "react";
import { Grid, Grow } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import CommunityCard from "./CommunityCard";
import { getTopics } from "redux/actions/community";
import useStyles from "./styles";

const Community = () => {
  const { data } = useSelector((state) => state.community);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopics());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grow in>
      <Grid container spacing={2} className={classes.root}>
        {data.map((topic) => {
          return (
            <Grid item xs={12} key={topic._id}>
              <CommunityCard
                title={topic.name}
                color={topic.color}
                imgSrc={`${process.env.REACT_APP_API_URL}/${topic.img}`}
                topicUrl={topic.url}
                totalPosts={topic.posts.length}
                isLocked={topic.isLocked}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};

export default Community;
