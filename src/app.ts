import express from "express"
import errorHandling from "./middleware/errorHandling.middleware"
import routes from "./routes"
import "express-async-errors"


const app = express()

app.use(express.json())
app.use(routes)
app.use(errorHandling);


export default app