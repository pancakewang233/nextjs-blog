import {NextPage} from 'next';
import React, {useCallback, useState} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {set} from 'lodash';
import {Form} from '../components/Form';

const SignUp: NextPage = () => {
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
    axios.post(`/api/v1/users`, signUpData).then(() => {
      window.alert('注册成功');
      window.location.href = '/sign_in';
    }, (error) => {
      if (error.response) {
        const response: AxiosResponse = error.response;
        if (response.status === 422) {
          setErrors(response.data);
        }
      }
    });
  }, [signUpData]);
  const onChange = useCallback((key, value) => {
    setSignUpData({
      ...signUpData,
      [key]: value
    });
  }, [signUpData]);
  return (
    <>
      <h1>注册</h1>
      <Form
        onSubmit={onSubmit}
        buttons={<>
          <button type="submit">
            注册
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
          },
          {
            label: '确认密码', type: 'password', value: signUpData.passwordConfirmation,
            onChange: e => onChange('passwordConfirmation', e.target.value)
            , errors: errors.passwordConfirmation
          }
        ]}>
      </Form>
      {/*<form onSubmit={onSubmit}>*/}
      {/*  <div>*/}
      {/*    <div>*/}
      {/*      <label>*/}
      {/*        用户名*/}
      {/*        <input type="text" value={signUpData.username} onChange={e => setSignUpData({*/}
      {/*          ...signUpData,*/}
      {/*          username: e.target.value*/}
      {/*        })}/>*/}
      {/*      </label>*/}
      {/*      {errors.username?.length > 0 && <div>*/}
      {/*        {errors.username.join(',')}*/}
      {/*      </div>}*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <label>*/}
      {/*        密码*/}
      {/*        <input type="password" value={signUpData.password} onChange={e => setSignUpData({*/}
      {/*          ...signUpData,*/}
      {/*          password: e.target.value*/}
      {/*        })}/>*/}
      {/*      </label>*/}
      {/*      {errors.password?.length > 0 && <div>*/}
      {/*        {errors.password.join(',')}*/}
      {/*      </div>}*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <label>*/}
      {/*        确认密码*/}
      {/*        <input type="password" value={signUpData.passwordConfirmation} onChange={e => setSignUpData({*/}
      {/*          ...signUpData,*/}
      {/*          passwordConfirmation: e.target.value*/}
      {/*        })}/>*/}
      {/*      </label>*/}
      {/*      {errors.passwordConfirmation?.length > 0 && <div>*/}
      {/*        {errors.passwordConfirmation.join(',')}*/}
      {/*      </div>}*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <button type="submit">注册</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</form>*/}
    </>

  );
};

export default SignUp;
