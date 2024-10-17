2 types of exports & imports

- Default Export/Import
export default component
import component from "path";


- Named Export/Import
export const Component
import {Component} from "path"


- React Hooks - see notes

react fiber architecture =  (<https://github.com/acdlite/react-fiber-architecture>)

react lifecycle method diagram = <https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>

following Single responisibiity principle makes our code - maintainable, testable, reusable

lifitng state up, controlled child & uncontrolled child - see below link
<https://react.dev/learn/sharing-state-between-components>

# redux

 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - connect our store to app
 - slice (cartSlice)
 - dispatch(action)  
 - selector

Redux uses ImmerJS to simplify the process of writing immutable update logic in reducers, which is one of the core principles of Redux. ImmerJS helps developers work with immutable state in a much easier and more intuitive way by allowing them to write what appears to be "mutating" code, but behind the scenes, Immer ensures that the state is not mutated directly. Read more below
<https://immerjs.github.io/immer/>


read bout RTK query :
 <https://redux-toolkit.js.org/rtk-query/overview>
 <https://redux-toolkit.js.org/tutorials/rtk-query>