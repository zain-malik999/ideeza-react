import { TOGGLE_MENU } from "../constant";
const initState = {
  menu: {
    open: true,
  },
};
const Setting = (state = initState, action) => {
  switch (action?.type) {
    case TOGGLE_MENU: {
      return {
        ...state,
        menu: {
          ...state.menu,
          open: !state?.menu?.open,
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
export { Setting };
