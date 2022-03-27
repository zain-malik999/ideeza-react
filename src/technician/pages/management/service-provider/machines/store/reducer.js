import {
  GET_SERVICE_PROVIDER_MACHINE,
  GET_SERVICE_PROVIDER_MACHINE_SUCCESS,
} from "./action";
const initState = {
  loader: false,
  data: [],
};
const reducer = (state = initState, action) => {
  switch (action?.type) {
    case GET_SERVICE_PROVIDER_MACHINE: {
      return {
        ...state,
        ...action?.payload,
      };
    }
    case GET_SERVICE_PROVIDER_MACHINE_SUCCESS: {
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
