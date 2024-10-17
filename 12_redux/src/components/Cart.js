import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuItemList from "./RestaurantMenuItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // to read the cart items from store, we have to subscribe to the store using Selector & usesSelector is an inbuilt hook

  const cartItems = useSelector((store) => store.cart.items);

  // note from interview perspective - make sure to subscribe to the right store
  // we can also do the following i.e. first subscribig to store & than extracting data from it. but it is less efficient
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-red-500 hover:bg-red-400 duration-[.3s] text-white rounded-md font-medium"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h2 className="text-xl mt-6 font-medium">
            Your cart is empty, Add some items to the cart 🛒.
          </h2>
        )}
        {/* reusing that itemlist wla component to render items added in cart */}
        <RestaurantMenuItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
