import { useState } from "react";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const FeedbackMsg = ({ message, severity }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={2500}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} variant="filled" severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default FeedbackMsg;
