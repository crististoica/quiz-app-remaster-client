import { Grid } from "@material-ui/core";

import AddQuiz from "./AddQuiz";

const Quizes = ({ classes }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AddQuiz classes={classes} />
      </Grid>
    </Grid>
  );
};

export default Quizes;
