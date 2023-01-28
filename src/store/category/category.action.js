import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPE } from './categry.types';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.util'
// export const setCategoriesData = (categoryArray) => {
//     return createAction(CATEGORY_ACTION_TYPE.SET_CATEGORY, categoryArray);
// }

export const fetchCategoriesStart = () => 
    createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoryArray) => 
    createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoryArray);

export const fetchCategoriesFailed = (error) => 
    createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);


export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCollectionAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
}