import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
  constructor(props){
    super(props);


    console.log("parent constructor");
    
  }

  // sbse imp use case of  componentdidmount is to make API call
  componentDidMount() {
    console.log("Parent component did Mount");

  }

  // here about.js is the parent whihc is itself a class based component & Userclass.js is also calss based component & is child of about.
  // so when life cycle will start 1st the parent's constructoer will be called, then parent's render &then while rendering it will start the life cycle of child, so child's constructor, render & component didmount of child will be called & finally when child will be completely rendered. the parent's component did mount will be called  

  render() {

    console.log("parent render");
    
    return (
      <div>
        <h1>About Page</h1>
        {/* in class based components we don't have hooks & here we can access context by following method we made userContext as component by .consumer property & inside that we are taking a callback function which is getting the data */}
        <div>
          Loggedin User<UserContext.Consumer>
            {/* {(data) => console.log(data)
            } */}
            {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h3>This is a about page created using routing. </h3>
        <h4>this about page is also made using class based components</h4>
        <p>life cycle of class based components. pehle constructor call hota hai & then render </p>
        <User name = {"Vivs from functional component"} />
  
        <UserClass name = {"First class component"} location = {"delhi (class)"}/>
        {/* <UserClass name = {"Second from class component"} location = {"USA (class)"}/> */}
      </div>
    );
  }
}

/**
 * THE ORDER OF THE ABOVE LIFE CYCLE OF THE PARENT & 2 SIBLINGS CHILD COMPONENT
 * parent constructor
 * parent render
 *    
 *    First constructor
 *    First render
 * 
 *    Second constructor
 *    Second render
 * 
 *    <DOM UPDATED - In a single batch>
 *    Firstcomponentdidmount
 *    Second component did mount
 * 
 * parent component did mount
 * 
 * 
 * see the react life cycle diagram it has majorly 2 phase render phase & commit phase, So the 2 child will be grouped & rendered together to increase efficiency & then commit phase me DOM update hoga & again group me component mount call hoga for both child & then finally parent the mount
 * 
 * 
 */


// const About = () => {
//   return (
//     <>
//       <h1>About Page</h1>
//       <h3>This is a about page created using routing </h3>
//       <User name = {"Vivs from functional component"} />

//       <UserClass name = {"Vivs from class component"} location = {"delhi (class)"}/>
//     </>
//   );
// };

export default About;
