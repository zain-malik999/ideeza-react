import {
  GET_NEWS_FEED_SUCCESS,
  GET_USER_CONNECT_SUCCESS,
  TOGGLE_LOADER,
} from "./action";
const init = {
  connection: [],
  feed: [],
  connectUser: null,
  loading: false,
};
const reducer = (state = init, action) => {
  switch (action?.type) {
    case TOGGLE_LOADER: {
      return {
        loading: !state.loading,
      };
    }
    case GET_NEWS_FEED_SUCCESS: {
      return {
        ...state,
        feed: action?.payload,
      };
    }
    case GET_USER_CONNECT_SUCCESS: {
      return {
        ...state,
        connectUser: action?.payload,
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
