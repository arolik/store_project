import { Button, Col, Row, message } from "antd";
import { clearCart } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { CartProductI } from "../../assets/interfaces";
import CartProduct from "./CartProduct";


const Cart: React.FC = () => {

    const cart = useAppSelector(state => state.appSlice.cart);
    const dispatch = useAppDispatch();
    const [ messageApi, contextHolder ] = message.useMessage();

    function findTotalQuantity (arr: Array<CartProductI>): number {
        let total = 0
        arr.map((p) => {
            return (
                total += p.count
            )
        })
        return total;
    };

    function findTotalSum (arr: Array<CartProductI>): number {
        let total = 0;
        arr.map((p) => {
            return (
                total += p.sum
            )
        })
        return total;
    };

    const totalQuantity = findTotalQuantity(cart);
    const totalSum = findTotalSum(cart);

    function succesOrder () {
        messageApi.open({
            type: 'success',
            content: 'thanks for buying'
        })
        dispatch(clearCart());
    }

    return (
        <Row gutter={24}>
            {contextHolder}
            <Col span={24}>
                {cart.map((product) => {
                    return (   
                        <CartProduct key={product.product.id} product={product.product} 
                        sum={product.sum} count={product.count} id={product.id} /> 
                    )
                })}
                {cart.length > 0 && 
                    <Row align="middle" justify="space-between" style={{marginBottom: '3rem'}}>
                    <Col>
                        <p>Quantity: {totalQuantity} </p>
                    </Col>
                    <Col>
                        <p>Total order: {totalSum.toFixed(2)} </p>
                    </Col>
                    <Col>
                        <Button type="primary" onClick={succesOrder}>Buy</Button>
                    </Col>
                </Row>
                }
            </Col>
        </Row>
    )
}

export default Cart;
