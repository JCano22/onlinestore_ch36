import "./list.css";
import { useState } from "react";

function List() {
  const [item, setItem] = useState({});
  const [allItems, setAllItems] = useState([]);

  function handleTextChange(e) {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...item };
    copy[name] = value;
    setItem(copy);
  }

  function addItem() {
    console.log(item);
    let copy = [...allItems];
    copy.push(item);

    setAllItems(copy);
  }

  return (
    <div className="page listCont">
      <div className="listField">
        <h3>My Shopping List</h3>

        <input
          name="name"
          className="form-control inputField"
          type="text"
          onBlur={handleTextChange}
        ></input>
        <div className="mb-3 text-center">
          <button className="btn btn-dark addItemBtn" onClick={addItem}>
            Add Item
          </button>
        </div>

        <div className="items-list">
          {allItems.map((list) => (
            <h5 key={list.name}>{list.name}</h5>
          ))}
        </div>
      </div>
    </div>
  );
}
export default List;
