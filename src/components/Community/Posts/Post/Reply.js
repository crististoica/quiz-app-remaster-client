import { Paper, Typography, Avatar, Divider } from "@material-ui/core";

const Reply = ({ classes, reply }) => {
  return (
    <Paper className={classes.reply}>
      <div className={classes.postLeft}>
        <Avatar
          src={`${process.env.REACT_APP_API_URL}/${reply.author.profileImg}`}
          alt="author-profile-img"
        />
        <div className={classes.postInfo}>
          <Typography variant="h5" className={classes.postTitle}>
            {reply.title}
          </Typography>
          <div>
            <Typography variant="subtitle2">{reply.author.name}</Typography>
            <Typography variant="subtitle2" className={classes.postDate}>
              {new Date(reply.createdOn).toDateString()}
            </Typography>
          </div>
        </div>
      </div>
      <Divider />
      <Typography variant="body1" className={classes.postContent}>
        {reply.content}
      </Typography>
    </Paper>
  );
};

export default Reply;
