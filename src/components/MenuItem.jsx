import { useState } from "react";

// imports, 

function MenuItem({ itemName, description, foodImage, price }) {
  //create a state isFavorite that has the inital value of isFavorite that comes from the props

  // Hook state variable
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }
  let contentButton = (isFavorite) ? "❤️" : "🖤";


  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        {/* the image will receive the url src from the props. Uncomment the line below with CTRL + / */}
        <img src={foodImage} alt="Food from the restaurant" />
        <figcaption>
          {/* the h2 will receive the item name from the props */}
          <h2>{itemName}</h2>
          {/* the p will receive the item description from the props */}
          <p>{description}</p>
        </figcaption>
      </figure>
      {/* the span will receive the item price from the props */}
      <span>{price} EUR</span>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */
        <button onClick={handleClickFavorite}>{contentButton}</button>
      }

    </section>
  );
}

export default MenuItem;
