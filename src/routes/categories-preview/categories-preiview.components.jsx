import { CategoriesContext } from "../../context/categories.context";
import { useContext } from "react";
import CategoryPreview from "../../Components/category-preview/category-preview.components";


const CategoriesPreview = () => {
  const { categoriesData } = useContext(CategoriesContext);
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
