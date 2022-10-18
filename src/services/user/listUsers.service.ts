import User from "../../entities/User"
import database from "../../database"
import ErrorHTTP from "../../errors/ErrorHTTP"

export default function(): Array<User>{
  if(!database.length) throw new ErrorHTTP("No users available!",403)

  return database
}