import { Row, Spin } from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ProductI } from "../../assets/interfaces";
import Product from "./Product";

interface ProductsI {
    products: Array<ProductI>
}

const Products: React.FC<ProductsI> = ({products}) => {

    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.appSlice.loading);
    
    return (
        <Row gutter={[48, 48]} justify="space-between">
            {loading && <Spin tip="Loading" size="large" style={{margin: '20vh auto'}} />}
            {products && products.map((product) => {
                return (
                    <Product key={product.id} productInfo={product} />
                )
            })}
        </Row>
    )
}

export default Products;