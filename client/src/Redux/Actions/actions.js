import { GET_DATA } from "../Actions/actionTypes";
import  db  from "../../../firebase"

export const getSales = () => {
    return async function (dispatch) {
      console.log("entre");
      try {
        const request = await db.collection('sales-andes').get();
        const result = request.docs.map((doc) => doc.data());

        return dispatch({
            type: GET_DATA,
            payload: result,
        })
      } catch (error) {
        console.log(error);
      }
    };
  };