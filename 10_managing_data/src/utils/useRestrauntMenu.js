import {useEffect, useState} from "react";
import { MENU_API_URL } from "./constant";

// whle writting custom hooks , pehle soch lo contract kya hoga. i.e what will be input & what will be output. yahn jaise hum resID le rhe as input & out put me hum us particular restraunt ki info resInfo ko export kr rhe hai

const useRestrauntMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    //fetch data 
    useEffect(() => {
        fetchData()

    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + resId);

        const json = await data.json();
        setResInfo(json.data)
    };


    return resInfo;
}

export default useRestrauntMenu;