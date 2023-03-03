import { Button, Card, Col, Modal, Rate, Row, Typography, notification } from "antd";
import { useState } from "react";
import { setCart } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ProductI } from "../../assets/interfaces";
import { token } from "../../assets/vars";
const { Text } = Typography;

interface ProductInfoI {
    productInfo: ProductI
}

const Product: React.FC<ProductInfoI> = ({productInfo}) => {

    const productStyle: React.CSSProperties = {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }

    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    const isLogin = useAppSelector(state => state.appSlice.isLogin);


    function addToCart () {
        dispatch(setCart({product: productInfo, sum: productInfo.price, count: 1, id: productInfo.id}))    
    }

    function showAlert () {
        notification.open({
            message: 'Notiffication message',
            description: 'you have to login'
        })
    }
    
    
    return (
        <Col xs={{ span: 12 }}  sm={{ span: 10 }}  md={{ span: 7 }} xl={{ span: 5 }}>
            <Card className="card__product"
            hoverable 
            style={productStyle} 
            cover={<img alt="text"  src={`${productInfo.image}`} />}     
            >
            <div>
                <p>{productInfo.title}</p>
                <p>{productInfo.price}</p>
                <Row gutter={24} justify="center" style={{ marginBottom: '1rem' }}>
                    <Col>
                        {isLogin ? 
                        <Button type="primary" onClick={addToCart} >Add to cart</Button> :
                        <Button type="primary" onClick={showAlert} >Add to cart</Button>
                        }           
                    </Col>
                </Row>
                <Row gutter={24} justify="center">
                    <Col>
                        <Button type="primary" onClick={() => setOpen(true) } >Show info</Button>
                    </Col>
                    <Modal title={productInfo.title} centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} >
                    <Row gutter={24}>
                        <Col span={12}>
                            <img alt="text" width={'100%'} src={`${productInfo.image}`} />
                        </Col>
                        <Col span={12}>
                            <Row><Text strong>{productInfo.category}</Text></Row>
                            <Row>{productInfo.description}</Row>
                            <Row><Text strong>price:</Text>{productInfo.price}</Row>
                            <Row><Rate defaultValue={productInfo.rating.rate}></Rate></Row>
                            <Row>count: {productInfo.rating.count}</Row>
                        </Col>
                    </Row>
                </Modal>
                </Row>     
            </div>
            </Card>
        </Col>
    )
}

export default Product;