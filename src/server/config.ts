const env = process.env

export const PORT = env.PORT ?? "8080";
export const HOST = env.host ?? "0.0.0.0";
export const SERVER_URL = `http://${PORT}:${HOST}`;

export default {
    PORT,
    HOST,
    SERVER_URL
}