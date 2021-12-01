import * as next from 'next'
import {Session} from 'next-iron-session';

type Post = {
    id: string;
    date: string;
    title: string;
    content: string
}

declare module 'next'{
    interface NextApiRequest{
        session: Session
    }
}
