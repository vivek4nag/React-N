// export const LOGO_URL =
//   "https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000";
// export const CDN_URL =
//   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
// export const SWIGGY_API_URL =
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";


// https://proxy.cors.sh/
// above link is to bypass CORS. append it beofrer the API link. but it is not working properly everytime

// Swiggy API for to get Restaurant data
export const SWIGGY_API_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

//  Swiggy API for to get Restaurant Item 
export const MENU_API_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";

// Restaurant Item Image CDN URL for Restaurant card
export const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/`;

// Swiggy Restaurant Path 
export const SWIGGY_REST_API_PATH = `data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants`;
