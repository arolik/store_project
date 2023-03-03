import { Button, Col, Image, InputNumber, Row } from "antd";
import { changeCountCartProduct } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import CartProduct from "./CartProduct";


const Cart: React.FC = () => {

    const cart = useAppSelector(state => state.appSlice.cart);
    

    return (
        <Row gutter={24}>
            <Col span={24}>
                {cart.map((product) => {
                    return (   
                        <CartProduct key={product.product.id} product={product.product} 
                        sum={product.sum} count={product.count} id={product.id} /> 
                    )
                })}
            </Col>
        </Row>
    )
}

export default Cart;
