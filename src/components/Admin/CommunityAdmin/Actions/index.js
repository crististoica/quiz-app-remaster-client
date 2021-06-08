import AccordionComponent from "../../Common/AccordionComponent";
import RemoveGuestRelated from "./RemoveGuestRelated";

const Actions = ({ classes }) => {
  return (
    <AccordionComponent title="Actions">
      <RemoveGuestRelated classes={classes} />
    </AccordionComponent>
  );
};

export default Actions;
