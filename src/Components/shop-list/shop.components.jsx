import {Routes , Route} from 'react-router-dom';
import CategoryPreview from "../../routes/categories-preview/categories-preiview.components";
import Category from '../../routes/category/category.components';

const Shop = () => {
  
  return (
    <Routes>
      <Route index element={<CategoryPreview/>}></Route>
      <Route path=':category' element={<Category/>}></Route>
    </Routes>
  );
};
export default Shop;
