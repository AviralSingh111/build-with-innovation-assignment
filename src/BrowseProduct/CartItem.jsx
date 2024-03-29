import "./ProductsPage.css";
function CartItem({
  title,
  price,
  thumbnail,
  quantity,
  cartItems,
  setCartItems,
  totalCost,
  setTotalCost,
  cartCount,
  setCartCount,
}) {
  return (
    <div className="cartItem">
      <div className="cartItemHead">{title}</div>
      <img src={thumbnail} className="cartItemImage" />
      <div className="cartItemFoot">
        <h3>{"$" + price}</h3>
        <h3>{quantity}</h3>
        <button
          className="binButton"
          onClick={() => {
            const quantity = cartItems[title].quantity;
            if (quantity == 1) {
              delete cartItems[title];
            } else {
              cartItems[title].quantity -= 1;
            }
            setCartItems({ ...cartItems });

            //update total
            setTotalCost(totalCost - parseInt(price));

            //update count
            setCartCount(cartCount - 1);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
