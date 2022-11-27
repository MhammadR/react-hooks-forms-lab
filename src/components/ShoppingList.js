import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [nameSearch, setNameSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setNameSearch(event.target.value);
  }

  const itemsToDisplay = items
    .filter((item) =>
      nameSearch === ""
        ? true
        : item.name.toLowerCase().includes(nameSearch.toLowerCase())
    )
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={nameSearch}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
