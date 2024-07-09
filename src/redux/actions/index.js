export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const GET_JOBS = "GET_JOBS";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
export const removeFromFavouritesAction = (fav) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: fav,
  };
};

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data,
  };
};

export const getJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
