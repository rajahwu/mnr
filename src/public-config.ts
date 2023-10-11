export const PORT = typeof process !== "undefined" ? process.env.PORT : 8080;
export const HOST =
  typeof process !== "undefined" ? process.env.HOST : "0.0.0.0";
export const API_SERVER_URL = `http://${PORT}:${HOST}/api`;
