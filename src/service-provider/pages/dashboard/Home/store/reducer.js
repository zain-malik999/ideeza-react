import {
  GET_DASHBOARD_DATA_SUCCESS,
  TOGGLE_LOADER,
  GET_DASHBOARD_STATS_SUCCESS,
} from "./action";

const initState = {
  messages: 0,
  articles: 0,
  open_tasks: 0,
  my_score: 0,
  count: 0,
  data: [],
  loader: false,
};
const reducer = (state = initState, action) => {
  switch (action?.type) {
    case GET_DASHBOARD_DATA_SUCCESS: {
      return {
        ...state,
        ...action?.payload,
      };
    }
    case GET_DASHBOARD_STATS_SUCCESS: {
      return {
        ...state,
        messages: action?.payload.messages,
        articles: action?.payload.articles,
        open_tasks: action?.payload.open_tasks,
        my_score: action?.payload.my_score,
      };
    }
    case TOGGLE_LOADER: {
      return {
        ...state,
        loader: !state.loader,
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
