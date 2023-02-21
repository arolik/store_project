import { useEffect } from "react";
import { fetchElectronicsProducts } from "../../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Products from "./Products";


const Electronics: React.FC = () => {

    const dispacth = useAppDispatch();
    const electronicsProducts = useAppSelector(state => state.appSlice.categories.electronicsCategory);

    useEffect(() => {
        dispacth(fetchElectronicsProducts());
    }, [dispacth])

    return (
        <Products products={electronicsProducts} />
    )
}

export default Electronics;