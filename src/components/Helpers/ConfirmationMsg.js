import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import useStyles from "./styles";
import { Button, Typography, Paper } from "@material-ui/core";

const ConfirmationMessage = ({
  open,
  setOpen,
  message,
  confirmAction,
  note,
}) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            {message}
          </Typography>
          {note && (
            <Typography variant="subtitle2" align="center">
              {note}
            </Typography>
          )}
          <div className={classes.confirmationBtns}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                confirmAction();
                setOpen(false);
              }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(false)}
            >
              No
            </Button>
          </div>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default ConfirmationMessage;
