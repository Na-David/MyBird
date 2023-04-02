import React, { useState } from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';

const LoginForm = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
        <Form>
            <div>
                <label htmlFor='user-id'>ID: </label> <br />
                <Input name='user-id' value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor='user-password'>Password: </label> <br />
                <Input name='user-password' type='password' value={password} onChange={onChangePassword} required />            
            </div>
            <div>
                <Button type='primary' htmlType='submit' loading={false}>Login</Button>
                <Link href="/signup"><a><Button>Sign Up</Button></a></Link>
            </div>
        </Form>
    </div> 
  )
}

export default LoginForm