import { IMG_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantMenuItemList = ({ items }) => {
  //   console.log(items);


  // we have useDispatch hook given by react-redux to dispatch an action. here on click of add button we will dispacth an action which will call the reducer function to 
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    // whatever we pass inside the additems will go as action.payload into the cartSlice.js me addItems function me which is the reducer function. redux will convert the data passed into payload internally & will pass as 2nd argument inside the addItems function in cartSlice
    dispatch(addItems(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="px-2 py-8 my-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-slate-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12">
            <img
              className="w-28 rounded-lg"
              src={IMG_CDN_URL + item.card.info.imageId}
            />
            <div className="absolute">
              <button
                className="p-1 bg-green-300 shadow-lg rounded-lg mx-[30px] -my-[80px]"
                onClick= {() => handleAddItem(item)}
              >
                ADD +{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuItemList;

// find difference btw 
// onclick = {handleAddItem} // This directly references the handleAddItem function, but does not pass any arguments. When you use this, the handleAddItem function will be called when the event (like a button click) occurs. React invokes handleAddItem when the button is clicked. This is used when the function doesn't need any additional arguments or needs only the event object (event is automatically passed to event handlers). In this case, handleAddItem will automatically receive the event object as its first argument (handleAddItem(event)).

// onclick = {() => handleAddItem(item)} // This is an inline arrow function. It creates a new function on every render, and when the button is clicked, it invokes handleAddItem with item as an argument. When the button is clicked, the inline arrow function is executed, which in turn calls handleAddItem with item as an argument. This is useful when you need to pass additional arguments (like item) to handleAddItem. The event object is not passed to handleAddItem automatically unless you pass it explicitly.

// onclick = {handleAddItem(item)} // This immediately invokes handleAddItem(item) as soon as the component renders, rather than waiting for the button to be clicked. This will immediately call handleAddItem(item) when the component renders, not when the button is clicked. The result of the function call will be assigned to the onClick handler, which is not what you usually want. This is generally a mistake and should be avoided unless you're trying to pre-invoke the function during render, which is rare and usually incorrect.
