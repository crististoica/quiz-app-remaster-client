import { Grid } from "@material-ui/core";

import CreateTopic from "./CreateTopic";
import Topics from "./ModifyTopics";
import Actions from "./Actions";

const CommunityAdmin = ({ classes }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CreateTopic classes={classes} />
      </Grid>
      <Grid item xs={12}>
        <Topics classes={classes} />
      </Grid>
      <Grid item xs={12}>
        <Actions classes={classes} />
      </Grid>
    </Grid>
  );
};

export default CommunityAdmin;
