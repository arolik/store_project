import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { fetchLogin } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";


const Login: React.FC = () => {

    const [userName, setUserName] = useState('login');
    const [userPassword, setUserPassword] = useState('password');
    const dispatch = useAppDispatch();
    const login = useAppSelector(state => state.appSlice.login)
    

    function setLogin() {
        dispatch(fetchLogin());
    }

    return (
        <Row  justify="center">
            {login ?
                <Navigate replace to="/" />
                :
                <Col span={8}>
                <Input  placeholder={userName}/>
                <p style={{marginBottom:'2rem'}}>mor_2314</p>
                <Input.Password 
                placeholder={userPassword}
                iconRender={(visible)=>(visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <p style={{marginBottom:'2rem'}}>83r5^_</p>
                <Button 
                type="primary" style={{width:'100%', marginBottom:'2rem'}}
                onClick={() => setLogin()}
                >
                Login
                </Button>
            </Col>
            }
        </Row>
    )
}

export default Login;