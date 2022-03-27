import { GET_ALL_PROJECTS_SUCCESS } from "./action";
const initState = {
  serviceProjects: [],
  params: {
    search: "",
    page: 1,
  },
  pageSize: 10,
  count: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS_SUCCESS: {
      return {
        ...state,
        serviceProjects: action?.payload,
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
