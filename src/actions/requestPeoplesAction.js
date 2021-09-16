import Axios from "axios";

export const REQUEST_PEOPLES = "REQUEST_PEOPLES";
export const RECEIVE_PEOPLES = "RECEIVE_PEOPLES";
export const ERROR_PEOPLES = "ERROR_PEOPLES";

const requestUsers = () => ({
  type: REQUEST_PEOPLES,
});

const receiveUsers = (peoples) => ({
  type: RECEIVE_PEOPLES,
  payload: peoples,
});

const errorPeoples = () => ({
  type: ERROR_PEOPLES,
});

export const requestPeoplesAction = () => {
  return async (dispatch) => {
    // first step
    console.log("starting 2");
    dispatch(requestUsers());

    const peoples = await Axios.get(
      `https://run.mocky.io/v3/ceb09528-8228-4a95-b7d9-c1f945023c92`
    )
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          //   console.log(res.data[i]);
          //   let sports = "";

          for (let z = 0; z < res.data[i].favouriteSports.length; z++) {
            res.data[i].totalSports +=
              res.data[i].favouriteSports[z].name + ", ";
          }
        }

        for (let x = 0; x < res.data.length; x++) {
          res.data[x].totalSports = res.data[x].totalSports.replace(
            "undefined",
            ""
          );
        }

        console.log(res.data);

        dispatch(receiveUsers(res.data));
      })
      .catch((err) => {
        dispatch(errorPeoples());

        console.log(err);
      });
  };
};
