import { useState } from "react";
import Item from "./Item";

export default function TaskList({
  items,
  onDeleteItems,
  onCheck,
  clearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((currentItem) => (
          <Item
            itemObj={currentItem}
            key={currentItem.id}
            onDeleteItems={onDeleteItems}
            onCheck={onCheck}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Completed Status</option>
        </select>
        <button
          onClick={() => clearItems()}
          disabled={!items.length}
          style={!items.length ? { backgroundColor: "grey" } : {}}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
