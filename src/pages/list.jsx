import "./list.css";
import { useState } from "react";
import ListItems from "../components/listItems";
import $ from "jquery";

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

  function clearInput() {
    $(".inputField").val("");
  }

  function addItem() {
    console.log(item);
    let copy = [...allItems];
    copy.push(item);
    clearInput();
    setAllItems(copy);
  }

  function handleDelete(item) {
    console.log("deleting" + item);

    //filter function will keep elements with diff name of item.
    let copy = allItems.filter((x) => x.name != item.name);
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
            <ListItems key={list.name} data={list} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default List;
