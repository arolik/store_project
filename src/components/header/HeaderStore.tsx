import { Badge, Button, Col, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { changeStatusLogin } from "../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const HeaderStore: React.FC = () => {

    const headerStyle: React.CSSProperties = {
        padding: '1rem 0',
        marginLeft: '0px',
        marginRight: '0px'
    }

    const [token, setToken] = useState(localStorage.getItem('userToken'));
    const isLogin = useAppSelector(state => state.appSlice.isLogin);
    const cart = useAppSelector(state => state.appSlice.cart);
    const dispatch = useAppDispatch();

    function changeLog() {
        setToken("");
        localStorage.clear();
        dispatch(changeStatusLogin());
    }


  return (
      <Header>
          <Row gutter={22} justify="center" align={"middle"} style={headerStyle}>
              <Col xs={{ span: 11 }} sm={{ span: 11 }} span={11}>
                  <div className="headerLogo">
                      <h3> fake store</h3>
                  </div>
              </Col>
              <Col xs={{ span: 11 }} sm={{ span: 11 }} span={11}>
                  <Row justify="end" align={"middle"}>
                      <Col span={6}>
                          <Link to="/cart" >
                              <Badge count={cart.length}>
                                  <ShoppingCartOutlined style={{ fontSize: '2rem' }} />
                              </Badge>
                          </Link>
                      </Col>
                      <Col span={6}>
                          {isLogin ? <Button type="primary" onClick={changeLog}>Logout</Button> : <Link to="/login">Login</Link>}
                      </Col>
                  </Row>
              </Col>
          </Row>
      </Header>
  )
}

export default HeaderStore;