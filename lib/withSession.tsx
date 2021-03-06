import {withIronSession} from 'next-iron-session';
import {GetServerSideProps, NextApiHandler} from 'next';

export function withSession(handler: NextApiHandler | GetServerSideProps) {
  return withIronSession(handler, {
    password: process.env.SECRET,
    // password: 'c2a85490-cc60-4f21-94e8-8dc5dd3220da',
    cookieName: 'blog',
    cookieOptions: {secure: false}
  });
}
