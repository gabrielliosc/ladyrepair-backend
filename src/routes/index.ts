import { Router } from "express";
import { clientRouter } from "./client.routes.ts"

const routes = Router()

routes.use("/clients", clientRouter)

export { routes }