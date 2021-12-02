import {NextPage} from 'next';
import {Form} from '../../components/Form';
import React, {useCallback, useState} from 'react';
import axios, {AxiosResponse} from 'axios';

const PostsNew: NextPage = () => {
  const [signUpData, setSignUpData] = useState({
    title: '',
    content: '',
  });
  const onChange = useCallback((key, value) => {
    setSignUpData({
      ...signUpData,
      [key]: value
    });
  }, [signUpData]);
  const [errors, setErrors] = useState({
    title: [],
    content: [],
  });
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('onSubmit', e);
    axios.post(`/api/v1/posts`, signUpData).then(() => {
      window.alert('提交成功');
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
      <Form
        onSubmit={onSubmit}
        buttons={<>
          <button type="submit">
            提交
          </button>
        </>}
        fields={[
          {
            label: '标题', type: 'text', value: signUpData.title,
            onChange: e => onChange('title', e.target.value)
            , errors: errors.title
          },
          {
            label: '内容', type: 'textarea', value: signUpData.content,
            onChange: e => onChange('content', e.target.value)
            , errors: errors.content
          },
        ]}>
      </Form>
    </>
  );
};

export default PostsNew;
