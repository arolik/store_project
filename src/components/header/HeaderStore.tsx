import { Col, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { changeStatusLogin } from "../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";



const HeaderStore: React.FC = () => {

  const headerStyle: React.CSSProperties = {
    padding: '1rem 0',
    marginLeft: '0px',
    marginRight: '0px'
  }

  const dispatch = useAppDispatch();
  const login = useAppSelector(state => state.appSlice.login);

  return (
    <Header>
      <Row gutter={22} justify="center" align={"middle"} style={headerStyle}>
        <Col xs={{ span: 11 }} sm={{ span: 11 }} span={11}>
          <div className="headerLogo">
            <h3> fake store</h3>
          </div>
        </Col>
        <Col xs={{ span: 11 }} sm={{ span: 11 }} span={11}>
          <Row justify="end">
            {login ? <Link to="/" onClick={() => dispatch(changeStatusLogin()) }>Logout</Link> : <Link to="/login">Login</Link>}
            
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderStore;