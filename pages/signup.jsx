import React, { useCallback, useState } from 'react'
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input} from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
  color: red;
`;


const SignUp = () => {

  const [id, onChangeId] = useInput('');
  // const [id, setId] = useState('');
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // },[])
  const [nickname, onChangeNickname] = useInput('');
  // const [nickname, setNickname] = useState('');
  // const onChangeNickname = useCallback((e) => {
  //   setNickname(e.target.value);
  // },[])
  const [password, onChangePassword] = useInput('');
  // const [password, setPassword] = useState('');
  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value);
  // },[])

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  },[password])

  const onSubmit = useCallback(() => {
    
  },[])

  return (
    <AppLayout>
    <Head>
      <title>Sign Up | My Bird</title>
    </Head>
    <Form onFinish={onSubmit}>
      <div>
        <label htmlFor='user-id'>ID: </label> <br />
        <Input name='user-id' value={id} required onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor='user-nick'>Nickname: </label> <br />
        <Input name='user-nick' value={nickname} required onChange={onChangeNickname} />
      </div>
      <div>
        <label htmlFor='user-password'>Password: </label><br />
        <Input name='user-password' type='password' value={password} required onChange={onChangePassword} />
      </div>
      <div>
        <label htmlFor='user-password-check'>Check the Password</label> <br />
        <Input 
          name = 'user-password-check'
          type= 'password'
          value={passwordCheck}
          required
          onChange={onChangePasswordCheck}
        />
        {passwordError && <ErrorMessage>Wrong Password</ErrorMessage>}
      </div>


    </Form>
    </AppLayout>
  )
}

export default SignUp;