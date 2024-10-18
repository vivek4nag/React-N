import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User - NagDevta",
});


export default UserContext;

// we created userContext by the inbuilt createContext method. Now this Context will act like global data & can be accessed from any component anywhere