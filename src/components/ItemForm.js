import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: "",
    category: "Produce",
  });

  function handleNewItem(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewItem(() => {
      return { ...newItem, [name]: value };
    });
  }

  return (
    <form
      className="NewItem"
      onSubmit={(event) => {
        event.preventDefault();
        props.onItemFormSubmit(newItem);
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleNewItem}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={newItem.category}
          onChange={handleNewItem}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
