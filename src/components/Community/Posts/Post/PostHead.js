import { Typography, Paper, Avatar } from "@material-ui/core";

import HelpIcon from "@material-ui/icons/Help";
import ResultQuestion from "components/Quiz/QuizResult/ResultQuestion";

const PostHead = ({ classes, data, color }) => {
  const style = { borderTop: `5px solid ${color}` };

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
      {data.questionContent && (
        <ResultQuestion
          questionNumber={data.questionContent.questionNumber}
          color={color}
          data={data.questionContent}
          isForCommunityPost
        />
      )}
      <Typography variant="body1" className={classes.postContent}>
        <HelpIcon style={{ color: color }} />
        {data.content}
      </Typography>
    </Paper>
  );
};

export default PostHead;
