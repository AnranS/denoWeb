import { Application } from "./deps.ts";
import { APP_HOST, APP_PORT } from "./config/config.ts";
import router from "./src/router.ts";
import notFound from "./src/handlers/notFound.ts";
import logger from "./src/middlewares/logger.ts";
import timmer from "./src/middlewares/timmer.ts";

const app = new Application();
app.use(logger);
app.use(timmer);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

window.addEventListener("load", () => {
  console.log(`server is running at http://${APP_HOST}:${APP_PORT}`);
});

await app.listen({
  hostname: APP_HOST,
  port: APP_PORT,
});
