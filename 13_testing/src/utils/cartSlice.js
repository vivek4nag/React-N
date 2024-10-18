import { createSlice } from "@reduxjs/toolkit";

// the commented out part is the same thing as written us se niche.. it is just with notes & niche wala is clear code only

/*
// this create slice takes configuration to create slice in redux store
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // initial state of our slice i.e. our cart is empty now
  },
  // writting reducer function corrosponding to each actions
   //below is reducers - plural bcz n slice we are writting multiple reducers & in Store there is one big reducer (singular term) 
  reducers: {
    // addItem is our dispatch action & the arrow function is the reducer function which will modify iur cart. the reducer function get 2 parameter state & action & the state will be modified as per action
    addItem: (state, action) => {
        // mutating the state i.e changing directly the state, eveen niche remove & clearCart me bhi
        // in valnilla(older redux)- redux gave warning don't mutate state. & return was mandatory
        // earlier we used to do ==> make a copy of state & then modify it
        // const NewState = [...state]
        // newState.items.push(action.payload);
        // return newState;

        // in redux toolkit (new version) we mutate the state directly & return is not mandatory
        // yet rudex is still converting the mutable state to immutable by creatig newState & returning. it does all by using a library named Immer behind the scene
      state.items.push(action.payload);
    },

    removeItem : (state, action) => {
        state.items.pop()
    },

    clearCart : (state, action) => {
        state.items.length = 0; // this will make the array empty
    }
  },
});

// now we will export 2 things => actions & reducers
// & below mentioned way is the syntax given by react-redux so aise hi likhne hai, actions ko on the fly destructure krke named export kr do & reducer ko default 
export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer
*/

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

 
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop;
    },
    clearCart: (state) => {
        // * RTK - either Mutate existing the state or return the new State
        // state.items.length = 0; // state = []
  
        return { items: [] };
      },
  },
});
export const { addItems, removeItems, clearCart } = cartSlice.actions;

// while exporting we are exporting reducer only(singular term) i.e. combination of multiple small reducers
export default cartSlice.reducer;
