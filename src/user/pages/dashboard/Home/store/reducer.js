import { GET_DASHBOARD_SUCCESS, TOGGLE_LOADING } from "./action";
const initState = {
  projects: 0,
  contacts: 0,
  score: 0,
  activities: [],
  latestArticles: [],
  topProjects: [],
  loading: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING: {
      return {
        ...state,
        loading: !state?.loading,
      };
    }
    case GET_DASHBOARD_SUCCESS: {
      return {
        ...state,
        projects: action?.payload?.project_counts,
        contacts: action?.payload?.contact_counts,
        score: action?.payload?.score,
        latestArticles: action?.payload?.latest_blogs,
        topProjects: action?.payload?.top_projects,
        activities: action?.payload?.latest_activities,
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
