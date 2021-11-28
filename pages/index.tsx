import {UAParser} from 'ua-parser-js';
import {GetServerSideProps, NextPage} from 'next';
import React, {useEffect, useState} from 'react';
import {getDatabaseConnection} from '../lib/getDatabaseConnection';
import {Post} from 'src/entity/Post';
import Link from 'next/link';

type Props = {
  posts: Post[],
}

const Index: NextPage<Props> = (props) => {
  const {posts} = props;
  return (
    <div>
      <h1>文章列表</h1>
      {posts.map(post =>
        <Link href={`/posts/${post.id}`} key={post.id}>
          <a>
            {post.title}
          </a>
        </Link>)}
    </div>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const connection = await getDatabaseConnection();
  const posts = await connection.manager.find('Post');
  const ua = context.req.headers['user-agent'];
  const result = new UAParser(ua).getResult();
  return {
    props: {
      browser: result.browser,
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};
