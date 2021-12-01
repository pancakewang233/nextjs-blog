import {GetServerSideProps, NextPage} from 'next';
import React, {useCallback, useState} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {getDatabaseConnection} from '../lib/getDatabaseConnection';
import {UAParser} from 'ua-parser-js';
import { withSession } from 'lib/withSession';

const SignIn: NextPage<{user: User}> = (props) => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    password: '',
    passwordConfirmation: ''
  });
  const [errors, setErrors] = useState({
    username: [],
    password: [],
    passwordConfirmation: []
  });
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    axios.post(`/api/v1/sessions`, signUpData).then(() => {
      window.alert('登录成功')
    }, (error) => {
      if (error.response) {
        const response: AxiosResponse = error.response;
        if (response.status === 422) {
          setErrors(response.data);
        }
      }
    });
  }, [signUpData]);
  return (
    <>
      {props.user && <div>
        当前登录用户为 {props.user.username}
      </div>}
      <h1>登录</h1>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label>
              用户名
              <input type="text" value={signUpData.username} onChange={e => setSignUpData({
                ...signUpData,
                username: e.target.value
              })}/>
            </label>
            {errors.username?.length > 0 && <div>
              {errors.username.join(',')}
            </div>}
          </div>
          <div>
            <label>
              密码
              <input type="password" value={signUpData.password} onChange={e => setSignUpData({
                ...signUpData,
                password: e.target.value
              })}/>
            </label>
            {errors.password?.length > 0 && <div>
              {errors.password.join(',')}
            </div>}
          </div>
          <div>
            <button type="submit">登录</button>
          </div>
        </div>
      </form>
    </>

  );
};

export default SignIn;

// @ts-ignore
export const getServerSideProps: GetServerSideProps = withSession(async (context) => {
  // @ts-ignore
  const user = context.req.session.get('currentUser')
  return {
    props: {
      user: JSON.parse(JSON.stringify(user))
    }
  };
});
