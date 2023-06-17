import { GET_DATA, FILTER_COMPANIES, FILTER_COMPANIES_DETAIL, DATA_PER_COMPANY } from "../Actions/actionTypes";

const initialState = {
    sales: [],
    dataCompanies: null,
    detail: null,
    filterCompanies: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_DATA:

            const namesAgency = new Set();
            const data = [];

            for (let i = 0; i < payload.length; i++) {
                const object = payload[i];
                const companyName = object.nameAgency;

                if (!namesAgency.has(companyName)) {
                    namesAgency.add(companyName);
                    const newObject = {
                        nameAgency: companyName,
                        total: 0
                    };
                    data.push(newObject);
                }

                const objExist = data.find(item => item.nameAgency === companyName);
                objExist.total += object.finalPrice;
                objExist.comission = objExist.total * 0.025;
            }
      
            return {
                ...state,
                sales: payload,
                dataCompanies: data,
            }

            case DATA_PER_COMPANY:
              const result = state.sales.filter((s) => s.nameAgency === payload);
              return {
                ...state,
                detail: [...result]
              }
            case FILTER_COMPANIES: 

            let sort = 
            payload === 'alphabetically' ?
            state.dataCompanies.sort(function (a, b) {
                if (a.nameAgency > b.nameAgency) {
                  return 1;
                }
                if (b.nameAgency > a.nameAgency) {
                  return -1;
                }
                return 0;
              })
              :
              payload === 'value' ?
              state.dataCompanies.sort(function (a, b) {
                if (a.total > b.total) {
                  return -1;
                }
                if (b.total > a.total) {
                  return 1;
                }
                return 0;
              }) 
              :
              null
              ;

            return {
                ...state,
                dataCompanies: [...sort],
            }

            case FILTER_COMPANIES_DETAIL: 
            let sortDetail = 
            payload === 'alphabetically' ?
            state.detail.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              })
              :
              payload === 'value' ?
              state.detail.sort(function (a, b) {
                if (a.finalPrice > b.finalPrice) {
                  return -1;
                }
                if (b.finalPrice > a.finalPrice) {
                  return 1;
                }
                return 0;
              }) 
              :
              null
              ;

            return {
                ...state,
                detail: [...sortDetail],
            }
        default:
            return state;
    }
}