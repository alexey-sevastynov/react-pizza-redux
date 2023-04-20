import React from "react";

function Categories() {
  const categories = ["Meat", "Vegan", "Grill", "Spicy"];

  const items = categories.map((category) => <li>{category}</li>);
  return (
    <div className="categories">
      <ul>
        <li className="active">All</li>
        {items}
      </ul>
    </div>
  );
}

export default Categories;
