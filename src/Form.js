import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function onSubmitHandler(e) {
    e.preventDefault();

    if (!description) return;
    // Above line represents if user send form without filling the item name then we simply neglect the input

    const newitem = { description, quantity, completed: false, id: Date.now() };

    // Now we need to lift up the states as these user inputs are required to sibling components

    onAddItems(newitem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={onSubmitHandler}>
      <h3>Create your Tasks with Time 📝</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {/* How we can create option in easy way using array.from */}
        {Array.from({ length: 12 }, (_, i) => `${i + 1}`).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button>
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}
