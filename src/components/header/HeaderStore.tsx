import { Col, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { ReactNode } from "react";
import { Link } from "react-router-dom";



const HeaderStore: React.FC = () => {

    const headerStyle: React.CSSProperties = {
      padding: '1rem 0',
      marginLeft: '0px',
      marginRight: '0px'
    }

    type menuItem = {
      key: string,
      label: ReactNode
    }

    const menuItems: Array<menuItem> = [
      { label: <Link to="/login">Login</Link>, key: "login" },
      { label: <Link to="/register">Register</Link>, key: "register" },
    ]

    return (
        <Header>
        <Row gutter={22} justify="center"  style={headerStyle}>
          <Col xs={{span:11}} sm={{span:11}} span={11}>
            <div className="headerLogo">
              <h3> fake store</h3>
            </div>
          </Col>
          <Col xs={{span:11}} sm={{span:11}} span={11}>
            <Row justify="end">
              <Col md={{span:11}} lg={{span:9}} xl={{span:7}} xxl={{span:6}}>
                <Menu mode="horizontal" items={menuItems} style={{borderBottom: '0px'}}></Menu>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    )
}

export default HeaderStore;