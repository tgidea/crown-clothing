import { createSelector } from "reselect";

// category from state (it includes: user, category, ...);
const selectCategoriesReducer = (state) => {    
    // if the category items from firebase not changed then it will return form here only.
    // i.e cached item is returned.
    return state.category;
}

// in order to create a memoize selector first declare what it it:

//selectCategories will give back categories array that lives on the category slice of our redux state
export const selectCategories = createSelector(
    // array of input selector : what do we want as part of parameter that we going to produce what the slelector should reutn back
    // what are the slice we want from redux. 
    [selectCategoriesReducer /* , next1 , next2 */],
    // second is going to be the output selector
    (categorySlice /*, next11 , next21  */) => categorySlice.categoriesData
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categorySlice) => categorySlice.isLoading
)
// memoize 2
export const selectCategoriesData = createSelector(    
    [selectCategories],
    (categoriesData) => categoriesData.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)
// export const selectCategoriesData = (state) => {
//     return state.category.categoriesData.reduce((acc, category) => {
//         const { title, items } = category;
//         acc[title.toLowerCase()] = items;
//         return acc;
//     }, {})
// }
