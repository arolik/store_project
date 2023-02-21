
import { useEffect } from "react";
import { fetchProducts } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Products from "./Products";


const AllProducts: React.FC = () => {

    const dispatch = useAppDispatch();
    const allProducts = useAppSelector(state => state.appSlice.allProducts);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (    
        <Products products={allProducts} />
    )
}

export default AllProducts;