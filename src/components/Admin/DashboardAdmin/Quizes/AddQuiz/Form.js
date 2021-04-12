import { Grid, TextField, Paper, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import ImageIcon from "@material-ui/icons/Image";

import { createQuiz } from "redux/actions/admin";

const Form = ({ classes, quizInfos, setQuizInfos }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(createQuiz(formData));
  };

  return (
    <Paper className={classes.formPaper}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justify="center">
          <Grid item sm={6} xs={12}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              autoComplete="off"
              fullWidth
              required
              onChange={(e) =>
                setQuizInfos({ ...quizInfos, name: e.target.value })
              }
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              name="key"
              label="Key"
              variant="outlined"
              autoComplete="off"
              fullWidth
              required
              onChange={(e) =>
                setQuizInfos({ ...quizInfos, key: e.target.value })
              }
            />
          </Grid>
          <Grid item md={4} xs={12} className={classes.btnContainer}>
            <TextField
              type="file"
              name="img"
              id="uploadLocalImgQuiz"
              className={classes.uploadInput}
              onChange={(e) => {
                console.log(e.target);
                setQuizInfos({
                  ...quizInfos,
                  img: URL.createObjectURL(e.target.files[0]),
                });
              }}
            />
            <label htmlFor="uploadLocalImgQuiz" className={classes.addImgBtn}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                startIcon={<ImageIcon />}
                component="span"
              >
                Add Image
              </Button>
            </label>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              name="color"
              type="color"
              label="Color"
              variant="outlined"
              margin="dense"
              defaultValue={quizInfos.color}
              onChange={(e) =>
                setQuizInfos({ ...quizInfos, color: e.target.value })
              }
              fullWidth
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              name="numOfQuestions"
              type="number"
              label="Questions (9 - 28)"
              margin="dense"
              defaultValue={quizInfos.numOfQuestion}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                setQuizInfos({ ...quizInfos, numOfQuestion: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
