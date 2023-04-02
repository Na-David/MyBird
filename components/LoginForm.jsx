import React, { useState, useCallback, useMemo } from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin-top: 10px;    
`

const LoginForm = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    },[])

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[])
    


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
            <ButtonWrapper style={{marginTop: '10px'}}>
                <Button type='primary' htmlType='submit' loading={false}>Login</Button>
                <Link href="/signup"><a><Button>Sign Up</Button></a></Link>
            </ButtonWrapper>
        </Form>
    </div> 
  )
}

export default LoginForm
