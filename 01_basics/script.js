import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
    className: "title",
    style: {
      background: "red",
    },
  },
  "hello world using createElement"
);

// React.createElement gives us an JS object(ReactElement) ==> then this object is converted(render) to HTML code & put up in DOM

// const heading1 = React.createElement(
//    "h2",
//   {
//     id: "title",
//     key: "h2",
//     style : {
//       background: "skyblue"
//   }
//   },
//   "heading2"
// );

// console.log(heading1);

/*
<div class="header">
        <h1>Hello Boss</h1>
        <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Home</li>
        </ul>
    </div>
*/

// const container = React.createElement(
//     "div",
//     {
//       id: "container",
//     },
//     [heading, heading1]
//   );

// creaating all above stuff using JSX
// & remmeber JSX is not HTML. it looks like HTML but it is fundamentally different from HTML. it is more like XML
// JSX  code is transpiled to react.createElement by babel behind the scene & then this element is rendered on DOM by converting to HTML
const heading1 = (
  <h1 id="JSXtitle" key="h1" className="h1">
    Hello world From JSX 🚀
  </h1>
);

// react component - 2 types
// class based component - old wawy of defining - not used now
// functional  component - new wawy of defining component - it is nothing but just a JS unction which returns a JSX code. It can accept props as arguments, making it reusable and dynamic.
const HeadingComponent = () => {
  return <h1>hello from functional component😉</h1>;
};

// if using return -wrap in curly braces {}, warna if not using return simply wrap in () or just write in one line

//  we can simply write any JS code inside JSX by using {} brackets.
const number = 500 + 600;

// ALso react element can be injected inside component using curly braces
const element = (
  <h2>
    this is a simple element which is injected inside component using curly
    brackets
  </h2>
);

const HeadingComponent2 = () => (
  <div>
    <HeadingComponent />
    {HeadingComponent()} {/*functional component can also be called simply like function or using <> brackets */}
    <h2>{`this ${number} is coming from a JS function injected inside JSX`}</h2>
    {element}
    <h1 className="hello">Another way of declaring functional component</h1>
    {/* ye upar jo headingcomponent2 ke andar headingcomponent ko daala hai ise component composititon kehte hai */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, heading1, <HeadingComponent2 />]);
