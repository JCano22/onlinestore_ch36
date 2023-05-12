import DataService from "../services/dataService";
import "./admin.css";
import { useState, useEffect } from "react";

function Admin() {
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  useEffect(function () {
    loadProducts();
    loadCoupons();
  }, []);

  async function loadProducts() {
    let service = new DataService();
    let prods = await service.getProducts();
    setAllProducts(prods);
  }

  async function loadCoupons() {
    let service = new DataService();
    let coupons = await service.getCoupons();
    setAllCoupons(coupons);
  }
  function handleProductText(e) {
    const text = e.target.value;
    const name = e.target.name;

    //create copy of state variable, modify the copy, send the copy back
    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  function saveProduct() {
    let service = new DataService();
    let prodToSave = { ...product };
    prodToSave.price = parseFloat(prodToSave.price);
    service.saveProduct(prodToSave);
    //create copy of state variable, modify the copy, send the copy back
    let copy = [...allProducts];
    copy.push(prodToSave);
    setAllProducts(copy);

    console.log(copy);
  }

  function deleteProduct(_id) {
    let service = new DataService();
    service.deleteProductById(_id);

    let copy = allProducts.filter((c) => c._id !== _id);
    setAllProducts(copy);
  }

  function handleCouponText(e) {
    const code = e.target.value;
    const name = e.target.name;

    let copy = { ...coupon };
    copy[name] = code;
    setCoupon(copy);

    console.log(code, name);
  }
  function saveCoupon() {
    let service = new DataService();
    let coupToSave = { ...coupon };
    coupToSave.discount = parseFloat(coupToSave.discount);
    service.saveCoupon(coupToSave);

    //create copy of state variable, modify the copy, send the copy back
    let copy = [...allCoupons];
    copy.push(coupToSave);

    setAllCoupons(copy);

    document.getElementsByName("code")[0].value = "";
    document.getElementsByName("discount")[0].value = "";

    console.log(copy);
  }

  function deleteCoupon(code) {
    /*call a deleteCoupon function on the service and pass the code
    the service should call a DLETE request to /api/coupons/<code>
    , on the server create the DELETE endpoint that catches the code from the URL and use it to delete a record from the database
    */
    let service = new DataService();
    service.deleteCoupon(code);

    let copy = allCoupons.filter((c) => c.code != code);
    setAllCoupons(copy);
  }

  return (
    <div className="page adminCont">
      <div className="parent">
        <section id="productsForm">
          <h3>Add Product</h3>

          <div className="mb-3">
            <label className="form-label" htmlFor="title">
              Title:
            </label>
            <input
              name="title"
              className="form-control"
              type="text"
              onBlur={handleProductText}
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Price:{" "}
            </label>
            <input
              name="price"
              className="form-control"
              type="text"
              onBlur={handleProductText}
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="category">
              Category:{" "}
            </label>
            <select
              name="category"
              className="form-control"
              id="categoria"
              onBlur={handleProductText}
            >
              <option value=""></option>
              <option value="Appetizers">Appetizers</option>
              <option value="Hot Dogs">Hot Dogs</option>
              <option value="Burgers">Burgers/Sandwiches</option>
              <option value="Entree">Entree</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="image">
              Image:{" "}
            </label>
            <input
              name="image"
              className="form-control"
              type="text"
              onBlur={handleProductText}
            ></input>
          </div>

          <div className="mb-3 text-center">
            <button className="btn btn-dark" onClick={saveProduct}>
              Save Product
            </button>
          </div>

          <ul className="prod-list">
            {allProducts.map((prod) => (
              <span>
                <li key={prod.title}>
                  {prod.title}
                  <button
                    onClick={() => deleteProduct(prod._id)}
                    className="btn btn-sm"
                  >
                    Delete
                  </button>
                </li>
              </span>
            ))}
          </ul>
        </section>

        <section id="secCoupons">
          <h3>Coupons</h3>
          <div className="mb-3">
            <label className="form-label" htmlFor="code">
              Coupon Code:
            </label>
            <input
              name="code"
              className="form-control"
              type="text"
              onBlur={handleCouponText}
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="discount">
              Discount:
            </label>
            <input
              name="discount"
              className="form-control"
              type="text"
              onBlur={handleCouponText}
            ></input>
          </div>

          <div className="mb-3 text-center">
            <button className="btn btn-dark" onClick={saveCoupon}>
              Save Coupon
            </button>
          </div>

          <ul className="coupon-list">
            {allCoupons.map((coupon) => (
              <li key={coupon.code}>
                {coupon.code}
                <button
                  onClick={() => deleteCoupon(coupon.code)}
                  className="btn btn-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Admin;
