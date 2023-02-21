import { Row } from "antd";
import { useEffect } from 'react';
import { fetchMensProducts } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Products from "./Products";


const Men: React.FC = () => {

    const dispatch = useAppDispatch();
    const mensProducts = useAppSelector(state => state.appSlice.categories.mensCategory)
    
    useEffect(() => {
        dispatch(fetchMensProducts())
    }, [dispatch])

    return (
        <Products products={mensProducts} />
    )
}

export default Men;