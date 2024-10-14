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
    <Link to={"/restraunts/" + id}>
      <div className="m-2 p-4 w-[250px] bg-slate-200 rounded-lg hover:bg-slate-300 duration-300">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="rounded-lg max-h-fit"
        />
        <div className="restaurant-details">
          <h3 className="restaurant-name font-bold py-1 text-lg">
            {name.length > 24 ? name.slice(0, 21) + "..." : name.slice(0, 24)}
          </h3>
          <div className="esa-rating">
            <h4 className="rating font-medium">
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



// HOC
  // input is normal restraunt card, output is restraunt card with id written over it (sir is using promoted tag for restraunt, but in my API it is not available, so using id)

  export const withPromotedLabel = (RestrauntCard) => {
    //taking restrauntcard component as input &  returning another functional  component
    // whatever props we are passing from < RestrauntCardPromoted /> in body.js, we will recieve them int the function below
    return (props) =>{
      return (
        <div>
          <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Promoted</label>
          {/* using spread operator below, we are passing all props to the restraunt card to render. So basically we are not touching a single thing in restraunt card & passing alll the props as it is. & i am just adding something on top of it to enhance it. in our case the promoted label */}
          <RestrauntCard {...props}/>
        </div>
      )
    }
  }

export default RestrauntCard;
