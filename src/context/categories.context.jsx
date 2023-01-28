import { createContext } from "react";
import { useState , useEffect } from "react";
// import {addCollectionAndDocuments} from '../utils/firebase/firebase.util';
import {getCollectionAndDocuments} from '../utils/firebase/firebase.util';


export const CategoriesContext = createContext({
    categoriesData:[],
});

export const CategoriesProvider = ({children}) => {
    const [categoriesData ,setCategoriesData]  = useState([]);
    useEffect( () => {
        const getCategoryMap = async () => {
            const categoryMap = await getCollectionAndDocuments();            
            setCategoriesData(categoryMap);
        }
        getCategoryMap();
    } , [])
    const value = {categoriesData};    
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}