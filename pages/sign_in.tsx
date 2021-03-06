import {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next';
import React, {useCallback, useState} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {getDatabaseConnection} from '../lib/getDatabaseConnection';
import {UAParser} from 'ua-parser-js';
import {withSession} from 'lib/withSession';
import {Form} from 'components/Form';

const SignIn: NextPage<{ user: User }> = (props) => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: [],
    password: [],
  });
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    axios.post(`/api/v1/sessions`, signUpData).then(() => {
      window.alert('登录成功');
    }, (error) => {
      if (error.response) {
        const response: AxiosResponse = error.response;
        if (response.status === 422) {
          setErrors(response.data);
        }
      }
    });
  }, [signUpData]);
  const onChange = useCallback((key,value)=>{
    setSignUpData({
      ...signUpData,
      [key]: value
    })
  },[signUpData])
  return (
    <>
      {props.user && <div>
        当前登录用户为 {props.user.username}
      </div>}
      <h1>登录</h1>
      <Form
        onSubmit={onSubmit}
        buttons={<>
          <button type="submit">
            登录
          </button>
        </>}
        fields={[
          {
            label: '用户名', type: 'text', value: signUpData.username,
            onChange: e => onChange('username', e.target.value)
            , errors: errors.username
          },
          {
            label: '密码', type: 'password', value: signUpData.password,
            onChange: e => onChange('password', e.target.value)
            , errors: errors.password
          }]}>
      </Form>
    </>

  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = withSession(
  async (context: GetServerSidePropsContext) => {
    // @ts-ignore
    const user = context.req.session.get('currentUser');
    return {
      props: {
        user: JSON.parse(JSON.stringify(user))
      }
    };
  });
