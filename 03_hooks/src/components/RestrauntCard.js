import { CDN_URL } from "../utils/constant";
// In above import we are using named exort /import, hence we are using curly braces

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;
    // this ? usage is optional chaining - it is a feature in JS that allows us to access the properties of an object or elements of an array without having to check whether the object or array is null or undefined first. It is represented by the ?. operator and can be used to concisely access deeply nested properties without having to write a long chain of if statements to check for null or undefined values.
  
  
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: '#f0f0f0',
        }}
      >
        <img
          className="res-logo"
          // src={
          //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
          //   resData.data.cloudinaryImageId
          // }
  
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="Biryani"
        />
        {/* <h3>{props.resName}</h3>
          <h4>{props.cuisine}</h4> */}
        {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(', ')}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
        <h4>{resData.data.deliveryTime} minutes</h4> */}
        {/* humne already upar destructure kr liya hai to ab directly props ke naam use krenge */}
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h5>{deliveryTime} minutes</h5>
      </div>
    );
  };

  export default RestaurantCard;