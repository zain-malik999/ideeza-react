import {
  LOGIN_SUCCESS,
  TOKEN_VERIFY_FAILED,
  TOKEN_VERIFY_SUCCESS,
} from "../constant";
const init = {
  authenticated: false,
  userType: null,
  user: null,
  token: {
    access_token: null,
    refresh_token: null,
  },
};
const Authentication = (state = init, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        userType: action?.userType,
        user: action?.payload,
        token: {
          access_token: action?.access_token,
          refresh_token: action?.refresh_token,
        },
      };
    }
    case TOKEN_VERIFY_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        userType: action?.userType,
        user: action?.payload,
        token: {
          access_token: action?.access_token,
          refresh_token: action?.refresh_token,
        },
      };
    }
    case TOKEN_VERIFY_FAILED: {
      return {
        authenticated: false,
        userType: null,
        user: null,
        token: {
          access_token: null,
          refresh_token: null,
        },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export { Authentication };
