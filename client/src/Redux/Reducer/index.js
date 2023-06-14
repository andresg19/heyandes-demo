import { GET_DATA } from "../Actions/actionTypes";

const initialState = {
    sales: [],
    dataCompanies: null,
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
        default:
            return state;
    }
}