import React from "react";

// class Categories extends React.Component {
//   categories = ["Meat", "Vegan", "Grill", "Spicy"];

//   state = {
//     activeItem: null,
//   };

//   onSelectIndex = (index) => {
//     this.setState({ activeItem: index });
//   };

//   render() {
//     const { activeItem } = this.state;

//     const items = this.categories.map((category, index) => (
//       <li
//         key={category}
//         className={activeItem === index ? "active" : ""}
//         onClick={() => this.onSelectIndex(index)}
//       >
//         {category}
//       </li>
//     ));

//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">All</li>
//           {items}
//         </ul>
//       </div>
//     );
//   }
// }

function Categories({ categories }) {
  const [activeItem, setItemActive] = React.useState(null);

  const onSelectItem = (index) => {
    setItemActive(index);
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
}

export default Categories;
