import { Button, Col, Image, InputNumber, Row } from "antd";
import { useState } from "react";
import { changeCountCartProduct, remoweCartProduct } from "../../../store/appSlice";
import { useAppDispatch } from "../../../store/hooks";
import { CartProductI } from "../../assets/interfaces";


const CartProduct: React.FC<CartProductI> = ({product}) => {

    const cartStyle: React.CSSProperties = {
        marginBottom: '2rem',
        border: '1px solid #f0f0f0',
        padding: '10px'
    }

    const [price, setPrice] = useState(product.price);
    const dispatch = useAppDispatch();
    

    function changeCount (value: any) {
        if(value !== null){
            setPrice(value * product.price);
            dispatch(changeCountCartProduct({id: product.id, count: value, sum: value * product.price}))
        }
    }

    function delProduct () {
        dispatch(remoweCartProduct(product.id))
    }

    return (
    
        <Row key={product.id} align="middle" justify="space-between" style={cartStyle} >
            <Col xs={{ span: 24 }} sm={{ span :24 }} lg={{ span: 12 }}>
                <Row >
                    <Col style={{ marginRight: '2rem' }}>
                        <Image width={100}
                            src={`${product.image}`}
                        />
                    </Col>
                    <Col>
                        <p>{product.title}</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span:24 }} lg={{ span: 12 }}>
                <Row justify="end">
                    <Col style={{ marginRight: '2rem' }}>
                        <InputNumber min={1} max={100} defaultValue={1}
                            onChange={(value: any) => changeCount(value)}
                        />
                        <p>price: {price.toFixed(2)}</p>
                    </Col>
                    <Col>
                        <Button type="primary" onClick={delProduct} >Delete</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default CartProduct;