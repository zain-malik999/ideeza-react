import {
  TOGGLE_PROJECT_MODEL,
  TOGGLE_MY_SELF_LOADER,
  TOGGLE_MY_SELF_PROJECT,
} from "./action";
const init = {
  project: {
    model: false,
    self: {
      model: false,
      loading: false,
    },
  },
};
const Reducer = (state = init, action) => {
  switch (action?.type) {
    case TOGGLE_PROJECT_MODEL: {
      return {
        ...state,
        project: { ...state.project, model: !state.project.model },
      };
    }
    case TOGGLE_MY_SELF_LOADER: {
      return {
        ...state,
        project: {
          ...state.project,
          self: {
            model: state.project.self.model,
            loading: !state.project.self.loading,
          },
        },
      };
    }
    case TOGGLE_MY_SELF_PROJECT: {
      return {
        ...state,
        project: {
          ...state.project,
          self: {
            model: !state.project.self.model,
            loading: state.project.self.loading,
          },
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
export default Reducer;
