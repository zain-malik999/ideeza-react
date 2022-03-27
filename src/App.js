import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { themes } from "util/theme";
import { Store } from "service";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Router from "util/router";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css";
import "./assets/font.css";
import "./assets/main.css";
import "./assets/rc.css";
import "./assets/style.css";
function App() {
  const theme = createMuiTheme(themes);
  return (
    <>
      <ToastContainer />
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
