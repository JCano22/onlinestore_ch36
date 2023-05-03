import "./catalog.css";
import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState([]);

  const [prodsToDisplay, setProdsToDisplay] = useState([]);

  useEffect(function () {
    console.log("catalog loaded");
    loadCatalog();
  }, []);

  function loadCatalog() {
    //get the product from the service
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);

    //calling function with all prods to display all when page loads
    setProdsToDisplay(prods);

    let cats = ["Appetizers", "Dogs", "Burgers", "Entrees"];
    setCategory(cats);
  }

  function filter(category) {
    let list = [];

    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    //sending list array to prodsToDisplay const state var
    setProdsToDisplay(list);
  }

  return (
    <div className="page catalog">
      <div>
        <h2>Check our amazing catalog!</h2>
        <h5>we have {products.length} Products for you!!</h5>

        <button className="btn btn-sm" onClick={() => loadCatalog()}>
          Full Menu
        </button>
        {category.map((c) => (
          <button
            key={c}
            onClick={() => filter(c)}
            className="btn btn-sm btn-filter"
          >
            {c}
          </button>
        ))}
      </div>

      {prodsToDisplay.map((p) => (
        <Product key={p._id} data={p} />
      ))}
    </div>
  );
};

export default Catalog;
