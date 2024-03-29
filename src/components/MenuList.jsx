import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  // console.log("C'est quoi au juste, foodItems ? ", foodItems);

  return (
    <>
      {/*render a MenuItem component to each element of the props array*/}
      <ul>

        {foodItems.map((menuItem) => (
          <li key={menuItem.itemName}>
            <MenuItem
              itemName={menuItem.itemName}
              description={menuItem.description}
              foodImage={menuItem.foodImage}
              price={menuItem.price}
              isFavorite={menuItem.isFavorite}
            />
          </li>
        ))}
      </ul>

    </>
  );
}

export default MenuList;

// 
// <MenuItem menuItem={...menuItem}/>
// 
