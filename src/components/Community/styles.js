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
    color: "inherit",
  },
  topicTitle: {
    display: "flex",
    alignItems: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    borderLeft: "10px solid",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  noPosts: {
    textAlign: "center",
  },
  topicActions: {
    display: "flex",
    gap: theme.spacing(1),
  },
  mobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  desktop: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  postsOnly: {
    [theme.breakpoints.down("sm")]: {
      borderBottom: "2px solid",
      paddingBottom: theme.spacing(1),
    },
  },
  formPaper: {
    width: 330,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  creatPostTxtArea: {
    width: "94.5%",
    height: 230,
    padding: theme.spacing(1),
    resize: "none",
  },
  post: {
    minWidth: 240,
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  postLeft: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
    padding: theme.spacing(2),
  },
  postInfo: {
    "& > div": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: theme.spacing(0),
        alignItems: "flex-start",
        marginTop: theme.spacing(1),
      },
    },
  },
  postDate: {
    color: "gray",
  },
  postTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
  },
  postWReplies: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  postHead: {
    padding: theme.spacing(2),
  },
  postContent: {
    padding: theme.spacing(2),
  },
  noReplies: {
    color: theme.palette.grey[500],
  },
  formTitle: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

export default useStyles;
