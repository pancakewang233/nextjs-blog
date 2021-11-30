import {NextApiRequest, NextApiResponse} from 'next';
import {getDatabaseConnection} from '../../../lib/getDatabaseConnection';
import {User} from 'src/entity/User';
import md5 from 'md5';

const Users = async (req: NextApiRequest, res: NextApiResponse) => {
  const connection = await getDatabaseConnection();
  const {username, password, passwordConfirmation} = req.body;
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  const user = new User();
  user.username = username.trim();
  user.password = password
  user.passwordConfirmation = passwordConfirmation

  await user.validate()
  if (user.hasErrors()) {
    res.statusCode = 422;
    res.write(JSON.stringify(user.errors));
  } else {

    await connection.manager.save(user);
    res.statusCode = 200;
    res.write(JSON.stringify(user));
  }
  res.end();
};

export default Users;
