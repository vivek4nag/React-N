import { IMG_CDN_URL } from "../utils/constant";

const RestaurantMenuItemList = ({ items }) => {
//   console.log(items);

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
              <span> ₹ {item.card.info.price / 100}</span>
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
              <button className="p-1 bg-green-300 shadow-lg rounded-lg mx-[30px] -my-[80px]">
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
