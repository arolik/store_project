import { Row } from "antd";
import { useEffect } from 'react';
import { fetchWomensProducts } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Products from "./Products";


const Womens: React.FC = () => {

    const dispatch = useAppDispatch();
    const womensProducts = useAppSelector(state => state.appSlice.categories.womensCategory)
    
    useEffect(() => {
        dispatch(fetchWomensProducts())
    }, [dispatch])

    return (
        <Products products={womensProducts} />
    )
}

export default Womens;