import { Card, Col, Row } from "antd";
import { useEffect } from "react";
import { fetchProducts } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Product from "./Product";
const { Meta } = Card


const AllProducts: React.FC = () => {

    const dispatch = useAppDispatch();
    const allProducts = useAppSelector(state => state.appSlice.allProducts);
    console.log(allProducts)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <Row gutter={[0, 48]} justify="space-between">
        { allProducts && allProducts.map((product) => {
            return (
                <Product key={product.id} productInfo={product} />
            )
        }) }
        </Row>
    )
}

export default AllProducts;