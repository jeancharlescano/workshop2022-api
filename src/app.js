import Fastify from "fastify";

import dataRoutes from "./router/data.routes.js";
import accountRoutes from "./router/account.routes.js";

export const fastify = Fastify();

export default async function buildApp() {
  fastify.register(dataRoutes, { prefix: "/data" });
  fastify.register(accountRoutes, { prefix: "/account" });
  return fastify;
}
