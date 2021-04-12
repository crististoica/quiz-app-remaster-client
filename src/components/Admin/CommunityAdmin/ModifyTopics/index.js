import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

import AccordionComponent from "../../Common/AccordionComponent";
import Topic from "./Topic";

import { getTopicsAdmin } from "redux/actions/admin";

const Topics = ({ classes, setEditTopic }) => {
  const { topics } = useSelector((state) => state.admin.community);
  const dispatch = useDispatch();

  useEffect(() => {
    if (topics.length === 0) {
      dispatch(getTopicsAdmin());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AccordionComponent title="Topics (modify)">
      <Grid container spacing={2}>
        {topics.map((topic) => {
          return (
            <Topic
              key={topic._id}
              classes={classes}
              topic={topic}
              setEditTopic={setEditTopic}
            />
          );
        })}
      </Grid>
    </AccordionComponent>
  );
};

export default Topics;
