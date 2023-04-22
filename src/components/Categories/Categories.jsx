import React from "react";

const Categories = React.memo(function Categories({ categories, onClickItem }) {
  const [activeItem, setItemActive] = React.useState(null);

  const onSelectItem = (index) => {
    setItemActive(index);
    onClickItem(index);
  };

  const items = categories.map((category, index) => (
    <li
      key={category}
      className={activeItem === index ? "active" : ""}
      onClick={() => onSelectItem(index)}
    >
      {category}
    </li>
  ));

  const styleLiAll = activeItem === null ? "active" : "";

  return (
    <div className="categories">
      <ul>
        <li className={styleLiAll} onClick={() => onSelectItem(null)}>
          All
        </li>
        {items}
      </ul>
    </div>
  );
});

export default Categories;
