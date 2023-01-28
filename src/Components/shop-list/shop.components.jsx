import {Routes , Route} from 'react-router-dom';
import { useEffect } from 'react';
import CategoryPreview from "../../routes/categories-preview/categories-preiview.components";
import Category from '../../routes/category/category.components';
// import {getCollectionAndDocuments} from '../../utils/firebase/firebase.util'
// import { setCategoriesData } from '../../store/category/category.action';
import { useDispatch } from 'react-redux';
import { fetchCategoriesAsync } from '../../store/category/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect( () => {
//     const getCategoryMap = async () => {
//         const categoriesArray = await getCollectionAndDocuments();                    
//         dispatch(setCategoriesData(categoriesArray));
//     }
//     getCategoryMap();
       dispatch(fetchCategoriesAsync());
//     // dispatch doesn't change but to remove warning:
} , [dispatch])
  
  return (
    <Routes>
      <Route index element={<CategoryPreview/>}></Route>
      <Route path=':category' element={<Category/>}></Route>
    </Routes>
  );
};
export default Shop;
