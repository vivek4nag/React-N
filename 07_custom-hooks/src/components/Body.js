import { useState, useEffect } from "react";
import RestaurantCard from "./RestrauntCard";
import { Shimmer } from "./Shimmer";
import { SWIGGY_API_URL, SWIGGY_REST_API_PATH } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState(""); // to get the searchbox entered data
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // to store & update the filtered restraunts
  const [restaurantName, setRestaurantName] = useState(""); // to show last me ki no match found

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      const restaurants = eval("json?." + SWIGGY_REST_API_PATH) || [];

      setRestaurantList(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
    );

    setFilteredRestaurants(filtered);
    setSearchRestaurant(""); // Clear the search input box after search
    setRestaurantName(searchRestaurant);
  };

  // using customhook wala thing- checking online or not
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! please check your internet connection
      </h1>
    );

  // Conditional rendering using ternary operator
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
          placeholder="search a restaurant you want..."
        />
        <button className="search" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.length !== 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link to={"/restraunt/" + restaurant?.info?.id}>
              <RestaurantCard
                key={restaurant?.info?.id}
                {...restaurant?.info}
              />
            </Link>
          ))
        ) : (
          <h2>Sorry, we couldn't find any restaurant for "{restaurantName}"</h2>
        )}
      </div>
    </div>
  );
};

export default Body;
