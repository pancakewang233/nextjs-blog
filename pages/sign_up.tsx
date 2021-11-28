import {NextPage} from 'next';
import React, {useCallback, useState} from 'react';
import axios from 'axios';

const SignUp: NextPage = () => {
  const [signUpData, setSignUpData] = useState({
    username:'',
    password: '',
    passwordConfirmation: ''
  })
  const onSubmit = useCallback((e)=>{
    e.preventDefault()
    axios.post(`/api/v1/users`, signUpData)
  },[signUpData])
  return (
    <>
      <h1>注册</h1>
      {JSON.stringify(signUpData)}
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label>
              用户名
              <input type="text" value={signUpData.username} onChange={e=> setSignUpData({
                ...signUpData,
                username: e.target.value
              })}/>
            </label>
          </div>
          <div>
            <label>
              密码
              <input type="password" value={signUpData.password} onChange={e=> setSignUpData({
                ...signUpData,
                password: e.target.value
              })}/>
            </label>
          </div>
          <div>
            <label>
              确认密码
              <input type="password"  value={signUpData.passwordConfirmation} onChange={e=> setSignUpData({
                ...signUpData,
                passwordConfirmation: e.target.value
              })}/>
            </label>
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
