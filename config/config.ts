const env = Deno.env.toObject();
export const APP_HOST = env.APP_HOST || "127.0.0.1";
export const APP_PORT = 8080;
export const DB_PATH = "./src/db/todos.json";
