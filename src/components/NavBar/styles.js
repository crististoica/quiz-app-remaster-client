import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "66.6%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "53.3%",
    },
  },
  iconWText: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
  },
  navlinksContainer: {
    width: 140,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navlink: {
    zIndex: 2,
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 150ms linear",
    },
    "&.active": {
      transform: "scale(1.1)",
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  hamburgerIcon: {
    fontSize: 34,
  },
}));

export default useStyles;
