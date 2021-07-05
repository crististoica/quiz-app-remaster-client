import { Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const Answered = ({ isClosed, isAuthor }) => {
  return (
    <>
      {isClosed ? (
        <div className="icon-container">
          <CheckIcon color="primary" />
          <Typography variant="body2" color="primary">
            Answered
          </Typography>
        </div>
      ) : (
        <div className="icon-container">
          <ClearIcon color="error" />
          <Typography variant="body2" color="error">
            Not Answered
          </Typography>
        </div>
      )}
    </>
  );
};

export default Answered;
