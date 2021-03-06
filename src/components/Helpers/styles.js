import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  confirmationBtns: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  notFound: {
    marginTop: theme.spacing(2),
    color: theme.palette.grey[500],
  },
}));

export default useStyles;
