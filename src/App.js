import "./App.css";
import { Typography, AppBar } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Sidebar";
import Notifications from "./components/Notifications";
import { makeStyles } from "@material-ui/styles";

function App() {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: "30px 100px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "600px",
      border: "2px solid black",
    },
    image: {
      marginLeft: "15px",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar} color="inherit">
        <Typography variant="h2" align="center">
          Zoom Clone
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
