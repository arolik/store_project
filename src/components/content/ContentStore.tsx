import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";


const ContentStore: React.FC = () => {

    const contentStyle: React.CSSProperties = {
        marginLeft: '0px',
        marginRight: '0px',
    }

    return (
        <Content style={{marginTop:'1rem'}}>
            <Row gutter={22} justify="center" style={contentStyle}>
                <Col>
                    content
                </Col>
            </Row>
        </Content>
    )
}

export default ContentStore;