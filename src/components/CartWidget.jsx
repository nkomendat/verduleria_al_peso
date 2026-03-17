import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "./CartContext";
import "../App.css";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <div className="cart-icon-container">
      <IoCartOutline className="icon" />
      <span className="cart-badge">{getTotalItems()}</span>
    </div>
  );
};

export default CartWidget;