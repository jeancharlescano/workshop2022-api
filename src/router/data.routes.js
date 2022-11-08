import cors from "@fastify/cors";
import { createData, getDatas } from "../controller/data.controller.js";

export default async function routes(fastify) {
  fastify.register(cors, { origin: true });

  fastify.post("/", createData);
  fastify.get("/", getDatas);
}
