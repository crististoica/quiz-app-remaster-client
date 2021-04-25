import {
  Grid,
  Typography,
  CardActionArea,
  Paper,
  Avatar,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const PostCard = ({ classes, title, author, createdOn, slug, color }) => {
  const { pathname } = useLocation();

  return (
    <Grid item xs={12}>
      <Link to={`${pathname}/${slug}`} className={classes.communityTopicLink}>
        <Paper className={classes.post} component={CardActionArea}>
          <div className={classes.postLeft}>
            <Avatar
              src={`${process.env.REACT_APP_API_URL}/${author.profileImg}`}
              alt="author-profile-img"
            />
            <div className={classes.postInfo}>
              <Typography variant="h5" className={classes.postTitle}>
                {title}
              </Typography>
              <div>
                <Typography variant="subtitle2">{author.name}</Typography>
                <Typography variant="subtitle2" className={classes.postDate}>
                  {new Date(createdOn).toDateString()}
                </Typography>
              </div>
            </div>
          </div>
          <ArrowForwardIosIcon style={{ color: color }} />
        </Paper>
      </Link>
    </Grid>
  );
};

export default PostCard;
