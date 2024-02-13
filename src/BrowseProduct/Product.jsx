import { useState } from "react";
import "./ProductsPage.css";
import Rating from "./Rating";
import Images from "./Images";
function Product({
  title,
  description,
  price,
  discount,
  rating,
  category,
  images,
  thumbnail,
  cartItems,
  setCartItems,
  totalCost,
  setTotalCost,
  cartCount,
  setCartCount,
}) {
  const [showImages, setShowImages] = useState();
  return (
    <div>
      <div className="singleItem">
        <div className="singleItemImage">
          <img src={thumbnail} alt="Product Image" className="thumbnail" />
        </div>
        <div className="item_description">
          <div className="singleItemDes1">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h2>{"$" + price}</h2>
          </div>
          <div className="singleItemDes2">
            <div>
              <Rating rating={rating} />
              <h4>{category}</h4>
            </div>
            <button
              className="cart__button"
              style={{ background: "none", border: 0 }}
            >
              <span
                className="add_cart_button"
                onClick={() => {
                  if (!cartItems[title]) {
                    cartItems[title] = {
                      price: price,
                      image: thumbnail,
                      quantity: 1,
                    };
                  } else {
                    cartItems[title].quantity += 1;
                  }
                  setCartItems({ ...cartItems });
                  console.log(cartItems);

                  //update total
                  setTotalCost(totalCost + parseInt(price));

                  //update count
                  setCartCount(cartCount + 1);
                }}
              >
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </div>
      {showImages ? <Images /> : null}
    </div>
  );
}

export default Product;
