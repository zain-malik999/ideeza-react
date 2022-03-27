import { PUT_PRIVACY_SUCCES } from "./action";
const initState = {
  social_connection: false,
  publish_wishlist: false,
  include_in_search_engine: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case PUT_PRIVACY_SUCCES: {
      return {
        ...state,
        social_connection: action?.payload.social_connection,
        publish_wishlist: action?.payload?.publish_wishlist,
        include_in_search_engine: action?.payload?.include_in_search_engine,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
