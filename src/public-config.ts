export const PORT = typeof process !== "undefined" ? process.env.PORT : 8080;
export const HOST =
  typeof process !== "undefined" ? process.env.HOST : "localhost";
export const API_SERVER_URL = `http://${HOST}:${PORT}/api`;
