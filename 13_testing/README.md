#2 types of exports & imports

- Default Export/Import
export default component
import component from "path";


- Named Export/Import
export const Component
import {Component} from "path"


- React Hooks - see notes

[react fiber architecture](https://github.com/acdlite/react-fiber-architecture)

[react lifecycle method diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

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


 # Types of Testing (for developer)

- Unit Testing- Testing One Component in Isolation || means seperately
- Integration testing - Testing Integration of Components

- End to End Testing (e2e testing) - End-to-end testing verifies that all components of a system can run under real-world scenarios. The goal of this form of testing is to simulate a user experience from start to finish. E2E testing can find software dependencies while also validating the system under test, its data integrity and integrations.

Read about [React Tesing Library](https://testing-library.com/docs/react-testing-library/intro/)

# Setting up Testing in our app

- Install React Testing Library
- Install Jest
- Install Babel Dependencies
- Configure Babel
- Configure Parcel Config File [from this site](https://parceljs.org/languages/javascript/#babel) to disable default Babel transpilation & use above babel config
- Jest configuration `npx jest --init`
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom