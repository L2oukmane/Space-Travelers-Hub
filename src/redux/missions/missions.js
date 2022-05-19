// Actions types

const ADD_MISSION = 'missionStore/missions/ADD_MISSION';

// actions

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const fetchData = () => (dispatch) => fetch('https://api.spacexdata.com/v3/missions')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((mission) => {
      dispatch({
        type: ADD_MISSION,
        payload: {
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        },
      });
    });
  })
  .catch((error) => console.log(error));

// reducer

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
