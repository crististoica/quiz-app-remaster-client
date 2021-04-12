import { Grid } from "@material-ui/core";

import Quizes from "./Quizes";

import useStyles from "../styles";

const DashboardAdmin = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Quizes classes={classes} />
      </Grid>
    </Grid>
  );
};

export default DashboardAdmin;
