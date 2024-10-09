import { useState, useEffect } from "react";
import {RestaurantMenuShimmer} from "./Shimmer";
import "../utils/RestrauntMenu.css";
import { useParams } from "react-router-dom";
// the above hook will help us to link different res pages using resID
import { MENU_API_URL } from "../utils/constant";

const RestrauntMenu = () => {
  // using state variable to show data
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  //using useEffect hook to fetch data from API
  useEffect(() => {
    fetchMenu();
  }, []); // using just empty dependency array

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <RestaurantMenuShimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"Rs"} {item.card.info.price / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
