import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 20,
  },
  active: {
    "& $line": {
      backgroundColor: "rgb(255,36,199)",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "rgb(255,36,199)",
    },
  },
  line: {
    height: 10,
    border: 0,
    backgroundColor: "#ffff",
    borderRadius: 1,
    borderTop: "1px solid rgb(255,36,199)",
    borderBottom: "1px solid rgb(255,36,199)",
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ffff",
    zIndex: 1,

    color: "rgb(160,174,192)",
    width: "100%",
    height: "100%",
    display: "flex",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "50px",
    minHeight: "50px",
  },
  active: {
    backgroundColor: "rgb(255,36,199)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.05)",
    color: "#fff",
  },
  completed: {
    color: "#fff",
    backgroundColor: "rgb(255,36,199)",
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
