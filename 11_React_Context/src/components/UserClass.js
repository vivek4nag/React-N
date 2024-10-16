import React from "react";

// class based components have a class which extends React.Component which have a render method which returns a piece of JSX
// whereas a functional compoent is a function which returns a piece of JSX
//loading a class based component on webpage means creating a instance of that class
// in life cycle of class based component - pehle constructor will be called, then render will be called & then componentDidMount will be called

class UserClass extends React.Component {
  // to recive a props we need a constructor && we must use Super props
  constructor(props) {
    super(props); // Calling the parent class constructor and passing props

    // earlier there was no useState so to create state variable we use this.state here state is a reserves keyword
    //& this state is nothing but an object only
    this.state = {
      count: 0,
      // count2: 2,
      userInfo : {
        // just like functional component me hum default value dete the, yahn bhi same defult value de rhe kuch kuch
        name :"dummy",
        location:"default",
      }
    };


    console.log(this.props.name + "child constructior");
    
  }

  async componentDidMount() {
    console.log( this.props.name + "Child component did Mount");


    // API call is made here & we made compnent did mount async function
    const data = await fetch("https://api.github.com/users/vivek4nag");
    const json = await data.json();
    console.log(json);


    // the mounting phase of the lifecycle of component finished with the rendering of the dummy data & then the API call was made from componentdidMount
    // the below setState begind the updating phase where the data recieved from API is updated by state variable & react triggers the render once again & this time the dtate variable has been changed with the updated value from API & after this render , componentdidupate will be called
    this.setState({
      userInfo: json,
    })

  }

  componentDidUpdate(){
    console.log("component did update");
    
  }

  // when component will removed/disabled from page
  componentWillUnmount(){
    console.log("component unmount");
    
  }

  render() {
    // const { name, location } = this.props;
    const { count, count2 } = this.state;
    const {name, location, avatar_url} = this.state.userInfo

    console.log(this.props.name + "child render");
    

    return (
      <div className="user-card">
        <img src="{avatar_url}" />
        <h1>Count : {count}</h1>
        {/* <h1>Count2 : {count2}</h1> */}
        <button onClick={() => {
            //never do like this directly this.state.count = this.state.count + 1
            //rather react gives us a function this.setState(). it will contain an obbject having the updated value of state
            this.setState({
                count: this.state.count + 1,
            })

        }}>count increase</button>
        <h2>{name }</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: LinkedIn</h4>
      </div>
    );
  }
}

export default UserClass;


/**
 * 
 * ----MOUNTING LIFE CYCLE ---
 * constructor (dummy)
 * render(dummy)
 *      <html dummmy>
 * component did mount
 *        <API call>
 *        <this.setState> --> state variable is updated
 * 
 * --MOUNTING LIFE CYCLE ENDS HERE ---
 * 
 * 
 * 
 * --- UPDATE CYCLE BEGINS ---
 * render (API DATA)
 * <html is loaded with API data>
 * component did update
 * 
 * --- UPDATE CYCLE ENDS ---
 * 
 * 
 * 
 */
