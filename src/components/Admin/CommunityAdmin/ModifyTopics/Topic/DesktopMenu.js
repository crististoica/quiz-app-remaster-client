import { IconButton, Tooltip } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const DesktopMenu = ({
  classes,
  setOpenConfirmRemove,
  setOpenConfirmToggleLock,
  setOpenEdit,
  isLocked,
}) => {
  const topicLockedTooltipText = isLocked ? "Locked" : "Unlocked";

  return (
    <div className={classes.topicDesktopMenu}>
      <Tooltip title="Remove Topic">
        <IconButton onClick={() => setOpenConfirmRemove(true)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit Topic">
        <IconButton onClick={() => setOpenEdit(true)}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={`Lock / Unlock Topic (${topicLockedTooltipText})`}>
        <IconButton onClick={() => setOpenConfirmToggleLock(true)}>
          {isLocked ? (
            <LockIcon style={{ color: "#C44536" }} />
          ) : (
            <LockOpenIcon style={{ color: "#3E885B" }} />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default DesktopMenu;
