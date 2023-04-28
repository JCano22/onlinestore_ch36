import "./admin.css";
import { useState } from "react";

function Admin() {
  const [product, setProduct] = useState({});

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
    console.log(product);
  }

  return (
    <div className="page adminCont">
      <div className="parent">
        <section id="productsForm">
          <h3>Add Product</h3>
          {/* <form className="newProds"> */}
          <div className="mb-3">
            <label className="form-label" htmlFor="title">
              Title:{" "}
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
          {/* </form> */}
        </section>

        <section id="secCoupons">
          <h3>Coupons</h3>
        </section>
      </div>
    </div>
  );
}
export default Admin;
