import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" color="secondary">
        Loading...
      </Typography>
      <LinearProgress color="secondary" />
    </div>
  );
}
