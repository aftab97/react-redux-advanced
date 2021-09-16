import Axios from "axios";

export const REQUEST_PEOPLE = "REQUEST_PEOPLE";
export const RECEIVE_PEOPLE = "RECEIVE_PEOPLE";
export const ERROR_PEOPLE = "ERROR_PEOPLE";

const requestUser = () => ({
  type: REQUEST_PEOPLE,
});

const receiveUser = (people) => ({
  type: RECEIVE_PEOPLE,
  payload: people,
});

const errorPeople = () => ({
  type: ERROR_PEOPLE,
});

export const requestPeopleAction = (id) => {
  return async (dispatch) => {
    // first step
    dispatch(requestUser());

    console.log("id", id);

    const peoples = await Axios.get(
      `https://run.mocky.io/v3/45928af0-9bd1-4eb0-a9a1-55845a009e8d/${id}`
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

        dispatch(receiveUser(res.data));
      })
      .catch((err) => {
        dispatch(errorPeople());

        console.log(err);
      });
  };
};
