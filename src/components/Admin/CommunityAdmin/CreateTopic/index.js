import { useState } from "react";
import { Grid } from "@material-ui/core";

import AccordionComponent from "../../Common/AccordionComponent";
import CommunityCard from "components/Community/CommunityCard";
import Form from "./Form";

const CreateTopic = ({ classes }) => {
  const [topicInfos, setTopicInfos] = useState({
    name: "",
    img: "",
    color: "#564D65",
  });

  return (
    <AccordionComponent title="Create Topic">
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <CommunityCard
            title={topicInfos.name}
            color={topicInfos.color}
            imgSrc={topicInfos.img}
          />
        </Grid>
        <Grid item md={7} xs={12}>
          <Form
            classes={classes}
            topicInfos={topicInfos}
            setTopicInfos={setTopicInfos}
          />
        </Grid>
      </Grid>
    </AccordionComponent>
  );
};

export default CreateTopic;
