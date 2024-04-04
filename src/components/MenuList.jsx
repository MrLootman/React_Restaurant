import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  // console.log("C'est quoi au juste, foodItems ? ", foodItems);

  // let keyElement = item.itemName.toLowerCase();
  // keyElement = keyElement.replace(/ /g,"-");
  // console.log('%c⧭ keyElement', 'color: #ff0000', keyElement);


  return (
    <>
      {/*render a MenuItem component to each element of the props array*/

        foodItems.map((item) =>
        //on récupére comme ID le nom et on nettoie la chaine 
          <MenuItem itemName={item.itemName} description={item.description} foodImage={item.foodImage} price={item.price} key={item.itemName} />
      )}
    </>
  );
}

export default MenuList;