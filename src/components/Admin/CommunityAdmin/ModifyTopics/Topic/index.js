import { useState } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import ConfirmationMsg from "components/Helpers/ConfirmationMsg";
import ModalComponent from "components/Helpers/ModalComponent";
import CommunityCard from "components/Community/CommunityCard";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

import { removeTopic, toggleTopicLock } from "redux/actions/admin";

const Topic = ({ classes, topic }) => {
  const [openConfirmRemove, setOpenConfirmRemove] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openConfirmToggleLock, setOpenConfirmToggleLock] = useState(false);
  const dispatch = useDispatch();
  const toggleText = topic.isLocked ? "unlock" : "lock";
  const removeMsgNote = topic.isForQuiz
    ? "If you remove this topic, the corresponding quiz will also be removed."
    : "";
  const handleTopicRemove = () => {
    dispatch(removeTopic(topic._id));
  };

  const handleTopicLockToggle = () => {
    dispatch(toggleTopicLock(topic._id, topic));
  };

  return (
    <>
      {openConfirmRemove && (
        <ConfirmationMsg
          open={openConfirmRemove}
          setOpen={setOpenConfirmRemove}
          message="Are you sure you want to remove this topic ?"
          confirmAction={handleTopicRemove}
          note={removeMsgNote}
        />
      )}
      {openEdit && (
        <ModalComponent open={openEdit} setOpen={setOpenEdit}>
          <h1>TOPIC EDIT FORM</h1>
        </ModalComponent>
      )}
      {openConfirmToggleLock && (
        <ConfirmationMsg
          open={openConfirmToggleLock}
          setOpen={setOpenConfirmToggleLock}
          message={`Are you sure you want to ${toggleText} this topic ?`}
          confirmAction={handleTopicLockToggle}
          note="Post creation is blocked in a locked topic."
        />
      )}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item md={3} sm={2} xs={1} className={classes.topicActions}>
            <DesktopMenu
              classes={classes}
              isLocked={topic.isLocked}
              setOpenConfirmRemove={setOpenConfirmRemove}
              setOpenEdit={setOpenEdit}
              setOpenConfirmToggleLock={setOpenConfirmToggleLock}
            />
            <MobileMenu
              classes={classes}
              isLocked={topic.isLocked}
              setOpenConfirmRemove={setOpenConfirmRemove}
              setOpenEdit={setOpenEdit}
              setOpenConfirmToggleLock={setOpenConfirmToggleLock}
            />
          </Grid>
          <Grid item md={9} sm={10} xs={11}>
            <CommunityCard
              title={topic.name}
              color={topic.color}
              imgSrc={`${process.env.REACT_APP_API_URL}/${topic.img}`}
              totalPosts={topic.totalPosts}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Topic;
