import { createRoot } from "react-dom/client";
import axios from "axios";

import { API_SERVER_URL } from "./public-config";
import App from "./components/app";

const appContainer = document.getElementById("app");

if (appContainer) {
  const root = createRoot(appContainer);
  root.render(<App />);
  axios.get(`${API_SERVER_URL}/contests`).then((res) => console.log(res));
} else {
  console.error("App Container not found");
}
