import RestaurantCard from "./RestrauntCard";

import resList from "../utils/mockData";

// importing react hook useState
import {useState} from "react"

const Body = () => {

  // Local State Variable - Super powerful variable
  let [listOfRestraunts, setListOfRestraunts] = useState(resList)



  // below is normal JS variable
  // let listOfRestraunts = [
  //   {
  //     data: {
  //       id: "255462",
  //       name: "KFC",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Burgers", "biryani", "american"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "255463",
  //       name: "Dominos",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Burgers", "biryani", "american"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "255473",
  //       name: "MacD",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Burgers", "biryani", "american"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.1",
  //     }
  //   },
  // ];

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic - filtering top rated restraunt
            const filteredList = listOfRestraunts.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunts(filteredList)
            
          }}
        >
          Top Rated restraunt
        </button>
      </div>

      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {listOfRestraunts.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
