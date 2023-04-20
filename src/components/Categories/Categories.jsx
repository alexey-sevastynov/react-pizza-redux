import React from "react";

class Categories extends React.Component {
  categories = ["Meat", "Vegan", "Grill", "Spicy"];

  state = {
    activeItem: null,
  };

  onSelectIndex = (index) => {
    this.setState({ activeItem: index });
  };

  render() {
    const { activeItem } = this.state;

    const items = this.categories.map((category, index) => (
      <li
        key={category}
        className={activeItem === index ? "active" : ""}
        onClick={() => this.onSelectIndex(index)}
      >
        {category}
      </li>
    ));

    return (
      <div className="categories">
        <ul>
          <li className="active">All</li>
          {items}
        </ul>
      </div>
    );
  }
}

// function Categories({ onClickItem }) {
//   const categories = ["Meat", "Vegan", "Grill", "Spicy"];

//   const [activeItem, setItemActive] = React.useState(null);

//   const onSelectIndex = (index) => {
//     setItemActive(index);
//   };

//   const items = categories.map((category, index) => (
//     <li
//       key={category}
//       className={activeItem === index ? "active" : ""}
//       onClick={() => onSelectIndex(index)}
//     >
//       {category}
//     </li>
//   ));

//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">All</li>
//         {items}
//       </ul>
//     </div>
//   );
// }

export default Categories;
