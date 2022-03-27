import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: "",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "rgb(142,195,68)",
    },
  },
  line: {
    height: 10,
    border: 1,
    backgroundColor: "#FD02C6",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    color: "#FD02C6",
    borderColor: "FD02C6",
  },
  completed: {
    backgroundColor: "#FD02C6",
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
export { useStyles, useColorlibStepIconStyles, ColorlibConnector };
