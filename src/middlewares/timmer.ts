import { VoidPromise } from "../types.ts";

export default async (ctx: any, next: VoidPromise) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};
