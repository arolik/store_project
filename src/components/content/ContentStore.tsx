import { Breadcrumb, Card, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { fetchProducts } from "../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import AllProducts from "./pages/AllProducts";
const { Meta } = Card;


const ContentStore: React.FC = () => {

    const contentStyle: React.CSSProperties = {
        marginLeft: '0px',
        marginRight: '0px',
    }

    
    return (
        <Content style={{ marginTop: '1rem' }}>
            <Row gutter={22} justify="center" style={contentStyle}>
                <Col style={{ marginBottom: '1rem' }}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/">main</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/">products</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row gutter={22} justify="center" style={contentStyle}>
                <Col span={22} >
                    <Routes>
                        <Route path="/" element={<AllProducts />} />
                    </Routes>
                </Col>
            </Row>
            
        </Content>
    )
}

export default ContentStore;