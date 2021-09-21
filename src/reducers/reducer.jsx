import data from "../components/data";

const INITIAL_STATE = {
  categoryList: ["All", ...new Set(data.map((item) => item.category))],
  menuList: data,
  cart: []
};


const reducer = (state =INITIAL_STATE, action) => {
  switch(action.type) {
    case("ADD_CHART"):
    return {...state, cart:[...state.cart, action.payload]};
    default:
        return state; 
  }
}
export default reducer;
