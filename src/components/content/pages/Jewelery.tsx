import { useEffect } from "react";
import { fetchJeweleryProducts } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Products from "./Products"


const Jewelery: React.FC = () => {

    const dispatch = useAppDispatch();
    const jeweleyProducts = useAppSelector(state => state.appSlice.categories.jeweleryCategory);

    useEffect(() => {
        dispatch(fetchJeweleryProducts());
    }, [dispatch])

    return (
        <Products products={jeweleyProducts} />
    )
}

export default Jewelery;