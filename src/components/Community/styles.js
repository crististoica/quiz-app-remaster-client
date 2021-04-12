import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  communityCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    "& > div": {
      display: "flex",
      alignItems: "center",
    },
  },
  communityCardLeft: {
    width: "70%",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(4),
    "& div": {
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    "& > div:nth-child(2)": {
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      flexDirection: "column",
      paddingLeft: theme.spacing(1),
      "& > div:nth-child(2)": {
        marginTop: theme.spacing(2),
        justifyContent: "flex-start",
      },
    },
  },
  communityCardImg: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 30,
    },
  },
  communityCardImgPlaceholder: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 30,
    },
  },
  communityCardRight: {
    justifyContent: "flex-end",
  },
  communityTopicLink: {
    textDecoration: "none",
  },
  topicTitle: {
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
