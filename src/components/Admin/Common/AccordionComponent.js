import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import useStyles from "../styles";

const AccordionComponent = ({ expand = false, children, title }) => {
  const [openAccordion, setOpenAccordion] = useState(expand);
  const classes = useStyles();

  const handleAccordionOpen = () => {
    setOpenAccordion((prevState) => !prevState);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={openAccordion} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleAccordionOpen}
        >
          <Typography variant="h5" className={classes.subHeader}>
            {openAccordion ? <RemoveIcon /> : <AddIcon />}
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
