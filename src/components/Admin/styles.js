import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  admin: {
    marginTop: theme.spacing(2),
  },
  formPaper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
  },
  adminHeader: {
    display: "flex",
    alignItems: "center",
    borderRadius: 4,
    borderBottom: `1px solid`,
    padding: theme.spacing(1),
  },
  subHeader: {
    display: "flex",
    alignItems: "center",
  },
  uploadInput: {
    display: "none",
  },
  addImgBtn: {
    width: "100%",
  },
  topicActions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  topicDesktopMenu: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    "& > *": {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  topicMobileMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  actionDescription: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
}));

export default useStyles;
