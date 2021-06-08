import { useDispatch } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import LayersClearIcon from "@material-ui/icons/LayersClear";

import { removeAllGuestRelated } from "redux/actions/admin";

const RemoveGuestRelated = ({ classes }) => {
  const dispatch = useDispatch();

  const handleRemoveGuestRelated = () => dispatch(removeAllGuestRelated());

  return (
    <Grid container>
      <Grid item md={8}>
        <Typography variant="body1" className={classes.actionDescription}>
          <LayersClearIcon color="primary" />
          Remove all Guest related (posts, replies)
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRemoveGuestRelated}
        >
          Remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default RemoveGuestRelated;
