import { MdStarRate } from "react-icons/md";
import { IMG_CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestrauntCard = ({
  id,
  cloudinaryImageId,
  name,
  areaName,
  sla,
  cuisines,
  costForTwo,
  avgRatingString,
}) => {


  return (
    <Link to={"/restraunts/" + id} className="restaurant-card">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-image"
      />
      <div className="restaurant-details">
        <h3 className="restaurant-name">
          {name.length > 24 ? name.slice(0, 21) + "..." : name.slice(0, 24)}
        </h3>
        <div className="esa-rating">
          <h4 className="rating">
            <MdStarRate
              className="rating-logo"
              style={
                avgRatingString > 4.0
                  ? { backgroundColor: "var(--green)" }
                  : { backgroundColor: "var(--red)" }
              }
            />
            <span>{avgRatingString}</span>
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} mins</h4>
        </div>
        <p className="cousine">
          {cuisines.join(", ").length > 32
            ? cuisines.join(", ").slice(0, 28) + "..."
            : cuisines.join(", ").slice(0, 32)}
        </p>
        <p className="location">{areaName}</p>
      </div>
    </Link>
  );






  // return (
  //   <div className="restaurant-card">
  //     <img
  //       src={IMG_CDN_URL + cloudinaryImageId}
  //       alt={name}
  //       className="restaurant-logo"
  //     />
  //     <div className="restaurant-details">
  //       <h3 className="restaurant-name">
  //         {name.slice(0, 22)}
  //         {name.length > 22 ? "..." : ""}
  //       </h3>
  //       <div className="esa-rating">
  //         <h4 className="rating">
  //           <MdStarRate
  //             className="rating-logo"
  //             style={
  //               avgRating > 4.2
  //                 ? { backgroundColor: "var(--green)" }
  //                 : { backgroundColor: "var(--red)" }
  //             }
  //           />
  //           <span>{avgRating}</span>
  //         </h4>
  //         <h4>{costForTwo}</h4>
  //         <h4>{sla.deliveryTime} mins</h4>
  //       </div>
  //       <p className="cousine">
  //         {cuisines.join(", ").slice(0, 30)}
  //         {cuisines.join(", ").length > 30 ? "..." : ""}
  //       </p>
  //       <p className="location">{areaName}</p>
  //     </div>
  //   </div>
  // );
};

export default RestrauntCard;