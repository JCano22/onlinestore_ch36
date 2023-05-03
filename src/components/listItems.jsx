import "./listItems.css";

function ListItems(props) {
  function handleClick() {
    props.onDelete(props.data);
  }

  return (
    <div className="list-item">
      <h5>{props.data.name}</h5>

      <button onClick={handleClick} className="btn btn-sm">
        Del
      </button>
    </div>
  );
}
export default ListItems;
