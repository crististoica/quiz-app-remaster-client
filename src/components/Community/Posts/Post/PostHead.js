import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Typography, Paper, Avatar, Button } from "@material-ui/core";

import HelpIcon from "@material-ui/icons/Help";
import ResultQuestion from "components/Quiz/QuizResult/ResultQuestion";

import Answered from "../Answered";
import { setPostStatus } from "redux/actions/community";

const PostHead = ({ classes, data, color, postAuthorId, isClosed }) => {
  const style = { borderTop: `5px solid ${color}` };
  const { _id: userId } = useSelector((state) => state.auth.data);
  const { topic, post } = useParams();
  const dispatch = useDispatch();

  const isAuthor = userId === postAuthorId;

  const togglePostStatus = () => {
    dispatch(setPostStatus(topic, post));
  };

  return (
    <Paper className={classes.postHead} style={style}>
      <div className={classes.postLeft}>
        <div>
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
        <div>
          <Answered isClosed={isClosed} />
          {isAuthor && (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={togglePostStatus}
            >
              {isClosed ? "Reopen" : "Set Answered"}
            </Button>
          )}
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
