import {
  GET_NOTES_SUCCESS,
  GET_PROJECT_SUCCESS,
  GET_USER_SUCCESS,
} from "./action";
const initState = {
  note: [],
  project: [],
  user: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action?.payload,
      };
    }
    case GET_PROJECT_SUCCESS: {
      return {
        ...state,
        project: action?.payload,
      };
    }
    case GET_NOTES_SUCCESS: {
      return {
        ...state,
        note: action?.payload,
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
