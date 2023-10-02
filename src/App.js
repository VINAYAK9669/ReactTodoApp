import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Logo from "./Logo";
import Stats from "./Stats";
import "./index.css";
function App() {
  // Here to lift up the states we are creating the below array which holds
  // the value of the input from the user and it will then used by Packinglist.
  // Note actually we are receving the input from the "form" component in react we dont pass those
  // values through props to the sibling components.
  // To resolve this we must lift up the state to parent component and pass these states wherever required.

  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  // when user clicks on delete option then list should be deleted
  function DeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleCheck(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all your tasks?"
    );
    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <TaskList
          items={items}
          onDeleteItems={DeleteItems}
          onCheck={handleCheck}
          clearItems={clearItems}
        />
        <Stats numItems={items} />
      </div>
    </>
  );

  //Create a logo component
}
export default App;
