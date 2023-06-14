import { DATA_PER_COMPANY, FILTER_COMPANIES, FILTER_COMPANIES_DETAIL, GET_DATA } from "../Actions/actionTypes";
import  db  from "../../../firebase"

export const getSales = () => {
    return async function (dispatch) {
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

  export const filterCompanies = (val) => {
    return async function (dispatch) {
      try {
        return dispatch({
          type: FILTER_COMPANIES,
          payload: val
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  export const filterCompaniesDetail = (val) => {
    return async function (dispatch) {
      try {
        return dispatch({
          type: FILTER_COMPANIES_DETAIL,
          payload: val
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  export const dataPerCompany = (companyName) => {
    return async function (dispatch) {
      try {
        return dispatch({
          type: DATA_PER_COMPANY,
          payload: companyName,
        })
      } catch (error) {
        console.log(error);
      }
    }
  }