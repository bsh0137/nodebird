import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id ,password]);

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            <ButtonWrapper>  {/*여기서 style 인라인방식으로 객체로 주면 안됨. 객체로 줄 경우 객체는 모양이 같아도 다른거로 인식하기 때문에 달라진게 없어도 리렌더링 계속 함. */}
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/singup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </Form>
    );
}

export default LoginForm;