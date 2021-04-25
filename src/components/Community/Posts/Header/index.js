import { Grid, Paper, Typography } from "@material-ui/core";

import LockIcon from "@material-ui/icons/Lock";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import SortPosts from "./SortPosts";
import CreatePost from "./CreatePost";

const Header = ({ classes, currentTopic }) => {
  return (
    <Grid item xs={12}>
      <Paper className={classes.header} style={{ color: currentTopic.color }}>
        <Typography
          variant="h5"
          className={`${classes.topicTitle} ${classes.postsOnly}`}
        >
          <img
            src={`${process.env.REACT_APP_API_URL}/${currentTopic.img}`}
            alt="topic_image"
            className={classes.communityCardImg}
          />
          {currentTopic.name}
          {currentTopic.isLocked && <LockIcon />}
          {currentTopic.isForQuiz && <FormatListBulletedIcon />}
        </Typography>
        <div className={classes.topicActions}>
          {!currentTopic.isForQuiz && (
            <CreatePost classes={classes} isLocked={currentTopic.isLocked} />
          )}
          <SortPosts classes={classes} />
        </div>
      </Paper>
    </Grid>
  );
};

export default Header;
