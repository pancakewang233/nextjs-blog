import {NextPage} from 'next';
import React, {useCallback, useState} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';

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
    axios.post(`/api/v1/users`, signUpData).then(() => {}, (error) => {
      if (error.response) {
        const response: AxiosResponse = error.response;
        if (response.status === 422) {
          setErrors({...errors, ...response.data});
        }
      }
    });
  }, [signUpData]);
  return (
    <>
      <h1>注册</h1>
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
            <label>
              确认密码
              <input type="password" value={signUpData.passwordConfirmation} onChange={e => setSignUpData({
                ...signUpData,
                passwordConfirmation: e.target.value
              })}/>
            </label>
            {errors.passwordConfirmation?.length > 0 && <div>
              {errors.passwordConfirmation.join(',')}
            </div>}
          </div>
          <div>
            <button type="submit">注册</button>
          </div>
        </div>
      </form>
    </>

  );
};

export default SignUp;
