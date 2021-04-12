import { Grid, Typography } from "@material-ui/core";

const AdminCategory = ({
  classes,
  icon: Icon,
  component: Component,
  title,
}) => {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color="primary"
            className={classes.adminHeader}
          >
            <Icon color="primary" fontSize="large" />
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Component classes={classes} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminCategory;
