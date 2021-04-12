import { useDispatch } from "react-redux";
import { Button, TextField, Grid, Paper } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";

import { createTopic } from "redux/actions/admin";

const Form = ({ classes, topicInfos, setTopicInfos }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(createTopic(formData));
    setTopicInfos({
      ...topicInfos,
      name: "",
      img: "",
      color: "#564D65",
    });
  };

  return (
    <Paper className={classes.formPaper}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <TextField
              name="name"
              type="text"
              label="Name"
              variant="outlined"
              value={topicInfos.name}
              onChange={(e) =>
                setTopicInfos({ ...topicInfos, name: e.target.value })
              }
              fullWidth
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12} className={classes.btnContainer}>
            <input
              type="file"
              name="img"
              id="uploadLocalImg"
              className={classes.uploadInput}
              onChange={(e) =>
                setTopicInfos({
                  ...topicInfos,
                  img: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
            <label htmlFor="uploadLocalImg" className={classes.addImgBtn}>
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
              defaultValue={topicInfos.color}
              onChange={(e) =>
                setTopicInfos({ ...topicInfos, color: e.target.value })
              }
              fullWidth
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
