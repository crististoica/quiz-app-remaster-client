import { Paper, Typography, Avatar, Divider } from "@material-ui/core";

const Reply = ({ classes, data, color }) => {
  const style = { borderLeft: `2px solid ${color}` };

  return (
    <Paper className={classes.postHead} style={style}>
      <div className={classes.postLeft}>
        <Avatar
          src={`${process.env.REACT_APP_API_URL}/${data.author.profileImg}`}
          alt={data.author.name}
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
      <Typography variant="body1" className={classes.replyContent}>
        {data.content}
      </Typography>
    </Paper>
  );
};

export default Reply;
