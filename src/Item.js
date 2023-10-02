export default function Item({ itemObj, onDeleteItems, onCheck }) {
  return (
    <li
      style={
        itemObj.completed
          ? {
              textDecoration: "line-through",
              color: "white",
              backgroundColor: "black",
            }
          : {}
      }
    >
      <span onClick={() => onCheck(itemObj.id)} value={itemObj.completed}>
        <span id="list-quantity">{`${itemObj.quantity}-Hr`}</span>

        <span id="list-description"> {itemObj.description}</span>
      </span>
      <button
        onClick={() => onDeleteItems(itemObj.id)}
        style={{ color: "red" }}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </li>
  );
}
