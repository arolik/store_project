import { Breadcrumb, Col } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/appSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";


const NavStore: React.FC = () => {

    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.appSlice.categories.namesCategories);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <Col style={{ marginBottom: '3rem' }}>
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/">home</Link></Breadcrumb.Item>
                {categories.map((c, index) => {
                    return (
                        <Breadcrumb.Item key={index}><Link to={`${c}`}>{c}</Link></Breadcrumb.Item>
                    )
                })}
            </Breadcrumb>
        </Col>
    )
}

export default NavStore;