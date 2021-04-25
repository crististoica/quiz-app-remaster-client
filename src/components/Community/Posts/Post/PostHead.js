import { Typography, Paper, Avatar, Divider } from "@material-ui/core";

const PostHead = ({ classes, data, color, isPost }) => {
  const style = isPost
    ? { borderLeft: `10px solid ${color}` }
    : { borderTop: `2px solid ${color}` };

  return (
    <Paper className={classes.postHead} style={style}>
      <div className={classes.postLeft}>
        <Avatar
          src={`${process.env.REACT_APP_API_URL}/${data.author.profileImg}`}
          alt="author-profile-img"
        />
        <div className={classes.postInfo}>
          <Typography variant="h5" className={classes.postTitle}>
            {data.title}
          </Typography>
          <div>
            <Typography variant="subtitle2">{data.author.name}</Typography>
            <Typography variant="subtitle2" className={classes.postDate}>
              {new Date(data.createdOn).toDateString()}
            </Typography>
          </div>
        </div>
      </div>
      <Divider />
      <Typography variant="body1" className={classes.postContent}>
        {data.content}
      </Typography>
    </Paper>
  );
};

export default PostHead;
