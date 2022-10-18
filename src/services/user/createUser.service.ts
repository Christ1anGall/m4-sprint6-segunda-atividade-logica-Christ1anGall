import User from "../../entities/User"
import database from "../../database"
import ErrorHTTP from "../../errors/ErrorHTTP"

export default function(name:string, age: number): User {
  const doUserExists = database.find( user => user.name === name )

  if(doUserExists) throw new ErrorHTTP("User already exists!",401)
  if(age < 18) throw new ErrorHTTP("Only 18+ users allowed!",402)

  const newUser = new User(name, age)

  database.push(newUser)

  return newUser
}