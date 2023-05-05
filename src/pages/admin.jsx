import "./admin.css";
import { useState } from "react";

function Admin() {
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  function handleProductText(e) {
    const text = e.target.value;
    const name = e.target.name;

    //create copy of state variable, modify the copy, send the copy back
    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);

    console.log(text, name);
  }

  function saveProduct() {
    //create copy of state variable, modify the copy, send the copy back
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);

    console.log(copy);
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
    //create copy of state variable, modify the copy, send the copy back
    let copy = [...allCoupons];
    copy.push(coupon);

    setAllCoupons(copy);

    console.log(copy);
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
              <li key={prod.title}>{prod.title}</li>
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
              <li key={coupon.code}>{coupon.code}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Admin;
