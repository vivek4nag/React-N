import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // created a local state variable which will keep track ki online hai ki nhi & whenever eventlistner is offline the state variable will be updated to false
  const [onlineStatus, setOlineStatus] = useState(true);

  //check if online - browser's window object alredy have an event listneer to check online or not. we will use that only

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOlineStatus(true);
    });
  }, []); // using empty dependency array so event istner will run only once

  //boolean value return whether online or not
  return onlineStatus;
};

export default useOnlineStatus;
