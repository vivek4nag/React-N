import { useEffect, useState } from "react"

const User = ({name}) => {

    const[count] = useState(0);
    const[count2] = useState(1);

    const timer = useEffect(() => {
        //API calls

        console.log("useEffect called");
        

        return () => {
            clearInterval(timer);
            console.log("useeffect return (this is the unmounting phase inside functional component)");
            
        }
    },[]);

    console.log("render");
    


    return <div className = "user-card">
        <h1>count = {count}</h1>
        <h1>count2 = {count2}</h1>
        <h2>{name}</h2>
        <h3>Location : Delhi</h3>
        <h4>Contact: LinkedIn</h4>
    </div>
}

export default User