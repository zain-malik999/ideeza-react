import { GET_CATEGORIES_SUCCESS, TOGGLE_LOADER, RESET_PAGE } from "./action";
import { GET_BLOG, GET_BLOG_SUCCESS } from "../home/store/action";
const initState = {
  categories: [],
  blogdata: [],
  loader: false,
  params: {
    search: "",
    page: 1,
  },
  pageSize: 10,
  count: 0,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case RESET_PAGE: {
      return {
        ...state,
        blogdata: [],
        loader: false,
        params: {
          search: "",
          page: 1,
        },
        pageSize: 10,
        count: 0,
      };
    }
    case TOGGLE_LOADER: {
      return {
        ...state,
        loader: !state?.loader,
      };
    }
    case GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action?.payload,
      };
    }
    case GET_BLOG: {
      return {
        ...state,
        params: {
          ...state.params,
          ...action?.payload,
        },
      };
    }
    case GET_BLOG_SUCCESS: {
      return {
        ...state,
        blogdata: action?.payload,
        params: {
          ...state.params,
          ...action?.params,
        },
        count: action?.payload?.count,
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
