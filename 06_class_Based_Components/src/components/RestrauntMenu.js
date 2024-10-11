import { useState, useEffect } from "react";
import { RestaurantMenuShimmer } from "./Shimmer";
import "../utils/RestrauntMenu.css";
import { useParams } from "react-router-dom";
// the above hook will help us to link different res pages using resID
import { MENU_API_URL, IMG_CDN_URL } from "../utils/constant";
import { MdStarRate } from "react-icons/md";

const RestrauntMenu = () => {
  // using state variable to show data
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  //using useEffect hook to fetch data from API
  useEffect(() => {
    fetchMenu();
  }, []); // using just empty dependency array

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

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

  return (
    <div className="menu">
      <div className="restaurant-header">
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
      )}
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
