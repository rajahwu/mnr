import ReactDOMServer from "react-dom/server";
import { fetchContest } from "../api-client";

import App from "../components/app";

const serverRender = async () => {
  const contests = await fetchContest();

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={{ contests }} />
  );

  return { initialMarkup };
};

export default serverRender;
