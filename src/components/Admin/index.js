import { Grow, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import ForumIcon from "@material-ui/icons/Forum";
import DashboardIcon from "@material-ui/icons/Dashboard";

import FeedbackMsg from "components/Helpers/FeedbackMsg";
import CommunityAdmin from "./CommunityAdmin";
import DashboardAdmin from "./DashboardAdmin";

import AdminCategory from "./AdminCategory";

import useStyles from "./styles";

const Admin = () => {
  const adminMsg = useSelector((state) => state.admin.message);
  const classes = useStyles();

  return (
    <>
      {adminMsg.content && (
        <FeedbackMsg message={adminMsg.content} severity={adminMsg.type} />
      )}
      <Grow in>
        <Grid container spacing={2} className={classes.admin}>
          <AdminCategory
            icon={DashboardIcon}
            classes={classes}
            component={DashboardAdmin}
            title="Dashboard"
          />
          <AdminCategory
            icon={ForumIcon}
            classes={classes}
            component={CommunityAdmin}
            title="Community"
          />
        </Grid>
      </Grow>
    </>
  );
};

export default Admin;
