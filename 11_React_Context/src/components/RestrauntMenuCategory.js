import { useState, useEffect } from "react";

import RestaurantMenuItemList from "./RestaurantMenuItemList";

const RestrauntMenuCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);

  // niche wala comented out code basically for lifting up of state. accordian open close wla function mai har inidvidual menu category ko naa dekr iske parent i.e. restraunt menu.js ko de dunga so that ek ko click krne pe dusra collapse ho jaaye. so parent will be controlling all the child components- hence called controlled components. also see ki upar props me showItems frm parents isme pass kr rhe
  //const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    // console.log("click");
    //setShowItems(showItems === true ? false : true);
    setShowIndex()
  };

  return (
    <div>
      {/* Accordian header */}
      <div
        className="w-6/12 mx-auto my-8 bg-gray-50 shadow-lg p-4 cursor-pointer "
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>👇</span>
        </div>
        {/* Accordian body */}
        {showItems && <RestaurantMenuItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestrauntMenuCategory;
