import {getUsers} from "lib/users"
import { NextApiRequest, NextApiResponse } from "next";

const Users = async(req: NextApiRequest, res: NextApiResponse) => {
  const users = await getUsers()
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify(users))
  res.end()
}

export default Users;
