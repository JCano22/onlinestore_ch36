import "./catalog.css";
import Product from "../components/product";

const Catalog = () => {
    return (
    <div className='page catalog'>
        <h2>Check our amazing catalog!</h2>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </div>
    )
}

export default Catalog;