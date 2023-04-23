import React from "react";
import propTypes from "prop-types";

const Categories = React.memo(function Categories({
  activeCategory,
  categoryNames,
  onClickCategory,
}) {
  const items = categoryNames.map((category, index) => (
    <li
      key={category}
      className={activeCategory === index ? "active" : ""}
      onClick={() => onClickCategory(index)}
    >
      {category}
    </li>
  ));

  const styleLiAll = activeCategory === null ? "active" : "";

  return (
    <div className="categories">
      <ul>
        <li className={styleLiAll} onClick={() => onClickCategory(null)}>
          All
        </li>
        {items}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: propTypes.oneOf([propTypes.number, null]),
  categoryNames: propTypes.arrayOf(propTypes.string),
  onClickCategory: propTypes.func,
};

export default Categories;
