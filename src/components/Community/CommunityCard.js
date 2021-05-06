import { Paper, Typography, CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LockIcon from "@material-ui/icons/Lock";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import useStyles from "./styles";

const CommunityCard = ({
  title,
  color,
  imgSrc,
  slug,
  topicId,
  totalPosts,
  isLocked,
  isForQuiz,
}) => {
  const classes = useStyles();

  if (slug) {
    return (
      <Link
        to={{ pathname: `community/${slug}`, state: { topicId } }}
        className={classes.communityTopicLink}
      >
        <Paper
          className={classes.communityCard}
          component={CardActionArea}
          style={{ borderLeft: `10px solid ${color}`, color: color }}
        >
          <div className={classes.communityCardLeft}>
            <div>
              <img
                src={imgSrc}
                alt="topic_image"
                className={classes.communityCardImg}
              />
              <Typography variant="h6" noWrap className={classes.topicTitle}>
                {title}
                {isLocked && <LockIcon />}
                {isForQuiz && <FormatListBulletedIcon />}
              </Typography>
            </div>
            <div>
              <Typography variant="body2">Posts: {totalPosts || 0}</Typography>
            </div>
          </div>
          <div className={classes.communityCardRight}>
            <ArrowForwardIosIcon />
          </div>
        </Paper>
      </Link>
    );
  }

  return (
    <Paper
      className={classes.communityCard}
      component={CardActionArea}
      style={{ borderLeft: `10px solid ${color}`, color: color }}
    >
      <div className={classes.communityCardLeft}>
        <div>
          <img
            src={imgSrc}
            alt="topic_image"
            className={classes.communityCardImg}
          />
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </div>
        <div>
          <Typography variant="body2">
            Total Posts: {totalPosts || 0}
          </Typography>
        </div>
      </div>
      <div className={classes.communityCardRight}>
        <ArrowForwardIosIcon />
      </div>
    </Paper>
  );
};

export default CommunityCard;
