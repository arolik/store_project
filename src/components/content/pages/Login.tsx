import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { ChangeEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { changeStatusLogin, fetchLogin } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { token } from "../../assets/vars";


const Login: React.FC = () => {
    
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useAppDispatch();
    const isLogin = useAppSelector(state => state.appSlice.isLogin);
    const errorMessage = useAppSelector(state => state.appSlice.errorMessage);
    
    
    function authUser() {
        dispatch(fetchLogin({userName, userPassword}));
    }

    function setLogin (e: ChangeEvent<HTMLInputElement>) {
        let loginValue = e.target.value;
        setUserName(loginValue);
    }

    function setPassword (e: ChangeEvent<HTMLInputElement>) {
        let passValue = e.target.value;
        setUserPassword(passValue);
    }

    return (
        <Row  justify="center">
            {isLogin ?
                <Navigate replace to="/" />
                :
                <Col xs={{span: 20}} sm={{span: 20}} md={{span: 16}} xl={{span: 8}}>
                <Input  placeholder="login" value={userName} onChange={setLogin} />
                <p style={{marginBottom:'2rem'}}>mor_2314</p>
                <Input.Password 
                placeholder="password"
                value={userPassword}
                onChange={setPassword}
                iconRender={(visible)=>(visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <p style={{marginBottom:'2rem'}}>83r5^_</p>
                {errorMessage !== undefined && <p style={{color:'#E74C3C'}}>{errorMessage}</p>}
                <Button 
                type="primary" style={{width:'100%', marginBottom:'2rem'}}
                onClick={() => authUser()}
                >
                Login
                </Button>
            </Col>
            }
        </Row>
    )
}

export default Login;