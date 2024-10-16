import { useState, useEffect } from "react";
import { RestaurantMenuShimmer } from "./Shimmer";
// import "../utils/RestrauntMenu.css";
import { useParams } from "react-router-dom";
// the above hook will help us to link different res pages using resID
import { MENU_API_URL, IMG_CDN_URL } from "../utils/constant";
import { MdStarRate } from "react-icons/md";

import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntMenuCategory from "./RestrauntMenuCategory";

const RestrauntMenu = () => {
  // using state variable to show data
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  //below we are declaring our custom hook which will fetch data & this current component will only display that data. hooks are just helper/utility function. hence define them inside utils . ALWAYS START HOOKS NAME WITH use
  const resInfo = useRestrauntMenu(resId);

  //using useEffect hook to fetch data from API
  // below code is commmented bcz now data is being fetched using custom hook
  // useEffect(() => {
  //   fetchMenu();
  // }, []); // using just empty dependency array

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API_URL + resId);

  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json?.data);
  // };


  // below useState is to control the accordian in controlled child. jis bhi index pe click krenge wo index dikhega baaki collapse ho jaayga 
  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) return <RestaurantMenuShimmer />;

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const cards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

  // we see top picks, deal of day, recommended etc cards, so we are filtering those cards from api using filter method. in the api such cards have type as mentioned in the code below, so we are just filtering based on that type

  const catrgories = cards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(catrgories);
  return (
    <div className="text-center flex-col">
      {/* <div className="restaurant-header">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        <div className="restaurant-header-details">
          <h1>{name}</h1>
          <h3>{locality}</h3>
          <p>{cuisines?.join(", ")}</p>
          <h4 className="rating-time">
            <div className="rating">
              <MdStarRate
                className="rating-logo"
                style={{
                  backgroundColor:
                    avgRatingString >= 4.0 ? "var(--green)" : "var(--red)",
                }}
              />
              <span>
                {avgRatingString || 3.8} ({totalRatingsString || "1K+ ratings"})
              </span>
            </div>
            <span>|</span>
            <span className="time">{sla?.slaString}</span>
          </h4>
        </div>
      </div>

      {itemCards.length ? (
        itemCards.map((item) => {
          const {
            id,
            name,
            price,
            defaultPrice,
            ratings,
            imageId,
            description,
          } = item.card.info;
          return (
            <div key={id} className="menu-items">
              <div className="left">
                <h2>{name}</h2>
                <h4>₹{price / 100 || defaultPrice / 100}</h4>
                <p>{(description && description.slice(0, 60)) || "Dummy"}</p>
                <h4 className="rating">
                  <MdStarRate
                    className="rating-logo"
                    style={{
                      backgroundColor:
                        ratings?.aggregatedRating?.rating >= 4.0
                          ? "var(--green)"
                          : "var(--red)",
                    }}
                  />
                  <span>
                    {ratings?.aggregatedRating?.rating || 3.8} (
                    {ratings?.aggregatedRating?.ratingCountV2 || 6})
                  </span>
                </h4>
              </div>
              <div className="right">
                <img src={IMG_CDN_URL + imageId} alt={name} />
                <button className="add-btn">ADD</button>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No items available</h2>
      )} */}
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(", ")}</p>

      {/* categories accordian  */}
      {catrgories.map((category, index) => (
        // controlled component as the showItems i.e. that accordian collapse & open is being controlled for every children from here (parent)
        <RestrauntMenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems = {index === showIndex ? true : false}
          setShowIndex = {() => setShowIndex(index)}
          // humne setShowIndex ko as a function pass kiya to the children to recieve the info ki kis accordian pe click hua hai , us hisab se baaki collapse kr denge. since child ke onlick wale pe click krne pe we want to change the state variable of parent which is directly not possible. hence we passed the setShow
          //basically we want to changes the state vriable of parents from children. Not possible directly, but indirectly by passing setVariable as function to child
        />
      ))}
    </div>
  );

  // return (
  //   <div className="menu">
  //     <h1>{name}</h1>
  //     <h2>{cuisines.join(", ")}</h2>
  //     <h3>{costForTwoMessage}</h3>
  //     <ul>
  //       {itemCards.map((item) => (
  //         <li key={item.card.info.id}>
  //           {item.card.info.name} -{"Rs"} {item.card.info.price / 100}
  //         </li>
  //       ))}
  //       {/* <li>{itemCards[0].card.info.name}</li> */}
  //     </ul>
  //   </div>
  // );
};

export default RestrauntMenu;
