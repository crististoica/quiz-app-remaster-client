import { useState } from "react";
import { Button, IconButton } from "@material-ui/core";

import PostAddIcon from "@material-ui/icons/PostAdd";
import ModalComponent from "components/Helpers/ModalComponent";
import Form from "./Form";

const CreatePost = ({ classes, isLocked }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        disabled={isLocked}
        startIcon={<PostAddIcon />}
        className={classes.desktop}
        onClick={handleClick}
      >
        Create Post
      </Button>
      <IconButton
        disabled={isLocked}
        className={classes.mobile}
        onClick={handleClick}
      >
        <PostAddIcon />
      </IconButton>
      {openModal && (
        <ModalComponent open={openModal} setOpen={setOpenModal}>
          <Form classes={classes} icon={PostAddIcon} />
        </ModalComponent>
      )}
    </>
  );
};

export default CreatePost;
