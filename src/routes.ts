import { Router } from "express"
import userController from "./controllers/user.controller"
import ErrorHTTP from "./errors/ErrorHTTP"

const routes = Router()

routes.get("/users", userController.listUsers)
routes.post("/users", userController.createUser)
routes.get("/error", async (req, res)=>{
    throw new ErrorHTTP("Debug error route", 500)
})
export default routes