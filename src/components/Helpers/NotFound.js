import { useHistory } from "react-router-dom";
import { Typography, Grid, Grow, Button } from "@material-ui/core";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";

import useStyles from "./styles";

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleReturn = () => {
    history.push("/dashboard");
  };

  return (
    <Grow in>
      <Grid container spacing={6} justify="center" className={classes.notFound}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            Not Found.
          </Typography>
        </Grid>
        <Grid item sm={4} xs={9}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<KeyboardReturnIcon />}
            fullWidth
            onClick={handleReturn}
          >
            Go Back
          </Button>
        </Grid>
      </Grid>
    </Grow>
  );
};

export default NotFound;
