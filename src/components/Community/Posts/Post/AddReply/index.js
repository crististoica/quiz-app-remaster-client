import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import ReplyIcon from "@material-ui/icons/Reply";

import Form from "./Form";
import ModalComponent from "components/Helpers/ModalComponent";

const AddReply = ({ classes }) => {
  const [openModal, setOpenModal] = useState(false);
  const { isClosed } = useSelector((state) => state.community.currentPost);

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      {openModal && (
        <ModalComponent open={openModal} setOpen={setOpenModal}>
          <Form
            classes={classes}
            icon={ReplyIcon}
            setOpenModal={setOpenModal}
          />
        </ModalComponent>
      )}
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        startIcon={<ReplyIcon />}
        onClick={handleOpen}
        disabled={isClosed}
      >
        Reply
      </Button>
    </>
  );
};

export default AddReply;
