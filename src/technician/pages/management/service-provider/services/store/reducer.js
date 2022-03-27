import {
  GET_SERVICE_PROVIDER_SERVICE,
  GET_SERVICE_PROVIDER_SERVICE_SUCCESS,
} from "./action";
const initState = {
  loader: false,
  data: [],
};
const reducer = (state = initState, action) => {
  switch (action?.type) {
    case GET_SERVICE_PROVIDER_SERVICE_SUCCESS: {
      return {
        ...state,
        data: action?.payload?.data,
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
