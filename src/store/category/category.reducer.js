import { CATEGORY_ACTION_TYPE } from './categry.types';

export const INITIAL_STATE = {
    categoriesData: [],
    isLoading: false,
    error: null
}

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true
            }
        case CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categoriesData: payload
            }
        case CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                isLoading: false,
                error : payload
            }
        default:
            return state;
    }
}
