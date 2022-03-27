import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth + "px",
    flexShrink: 0,
    border: "none",
    boxShadow: "10px 10px 10px rgba(0,0,0,1)",
  },
  drawerPaper: {
    width: drawerWidth + "px",
  },
  drawerHeader: {
    alignItems: "center",
    width: "240px",
  },
}));
export { useStyles };
