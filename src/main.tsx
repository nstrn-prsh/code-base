import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./theme/output.css";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <Provider store={store}>
      <HashRouter>
         <App />
      </HashRouter>
   </Provider>
);
