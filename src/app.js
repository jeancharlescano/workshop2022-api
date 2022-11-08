import Fastify from "fastify";

import dataRoutes from "./router/data.routes.js";

export const fastify = Fastify();

export default async function buildApp() {
  fastify.register(dataRoutes, { prefix: "/data" });
  return fastify;
}
