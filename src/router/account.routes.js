import cors from "@fastify/cors";
import {
  createAccount,
  getAccounts,
} from "../controller/account.controller.js";

export default async function routes(fastify) {
  fastify.register(cors, { origin: true });

  fastify.post("/", createAccount);
  fastify.get("/", getAccounts);
}
