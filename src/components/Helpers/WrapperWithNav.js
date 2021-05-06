import { Grow, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const WrapperWithNav = ({ children, location, color }) => {
  const history = useHistory();

  return (
    <Grow in>
      <Grid
        container
        spacing={2}
        component={Paper}
        style={{ marginBottom: 10, color: color }}
      >
        <Grid item xs={12}>
          <IconButton
            onClick={() => {
              history.goBack();
            }}
          >
            <ArrowBackIcon style={{ fontSize: 44 }} />
          </IconButton>
          <Typography variant="h5">{location}</Typography>
        </Grid>
        {children}
      </Grid>
    </Grow>
  );
};

export default WrapperWithNav;
