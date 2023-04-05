import React, { useCallback, useState } from 'react'
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input} from 'antd';


const SignUp = () => {

  const [id, setId] = useState('');
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  },[])

  const [nick, setNick] = useState('');
  const onChangeNick = useCallback((e) => {
    setNick(e.target.value);
  },[])

  const [password, setPassword] = useState('');
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  },[])
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
        <Input name='user-nick' value={nick} required onChange={onChangeNick} />
      </div>
      <div>
        <label htmlFor='user-password'>Password: </label><br />
        <Input name='user-password' type='password' value={password} required onChange={onChangePassword} />
      </div>


    </Form>
    </AppLayout>
  )
}

export default SignUp;