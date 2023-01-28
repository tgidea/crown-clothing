import CategoryPreview from "../../Components/category-preview/category-preview.components";
import {selectCategoriesData} from '../../store/category/category.selector';
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  // const { categoriesData } = useContext(CategoriesContext);
  const categoriesData = useSelector( selectCategoriesData );
  return (
    <>
      {Object.keys(categoriesData).map((title) => {
        const products = categoriesData[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </>
  );
};
export default CategoriesPreview;
