import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { Route, Routes } from "react-router-dom";
import NavStore from "./NavStore";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import Login from "./pages/Login";
import Men from "./pages/Men";
import Womens from "./pages/Womens";

const ContentStore: React.FC = () => {

    const contentStyle: React.CSSProperties = {
        marginLeft: '0px',
        marginRight: '0px',
    }

    return (
        <Content style={{ marginTop: '1rem' }}>
            <Row gutter={22} justify="center" style={contentStyle}>
                <NavStore />
            </Row>
            <Row gutter={22} justify="center" style={contentStyle}>
                <Col span={22} className="my__app">
                    <Routes>
                        <Route path="/" element={<AllProducts />} />
                        <Route path="/men's clothing" element={<Men />} />
                        <Route path="/women's clothing" element={<Womens />} />
                        <Route path="/jewelery" element={<Jewelery />} />
                        <Route path="/electronics" element={<Electronics />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Col>
            </Row>
        </Content>
    )
}

export default ContentStore;