import { actions } from "../actions/index";

const initialState = {
    countriesList: [],
};

export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.PUT_COUNTRIES: {
            return {
                ...state,
                ...action.payload,
            };
        }

        default:
            return state
    }
}
