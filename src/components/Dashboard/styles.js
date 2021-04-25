import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    marginTop: theme.spacing(2),
  },
  quizSelectCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  cardImage: {
    width: 60,
    height: 60,
    [theme.breakpoints.down("xs")]: {
      width: 50,
      height: 50,
    },
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&>*": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&>*": {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
    },
  },
  cardLink: {
    textDecoration: "none",
  },
  cardNavBtn: {
    height: "100%",
    padding: theme.spacing(2),
  },
}));

export default useStyles;
