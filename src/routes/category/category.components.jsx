import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCategoriesData,
  selectCategoriesIsLoading,
} from "../../store/category/category.selector";
// import { CategoriesContext } from "../../context/categories.context";
import { useEffect, useState } from "react";
import "./category.styles.scss";
import ProductCard from "../../Components/Product-card/product-cart.components";
import Spinner from "../../Components/spinner/spinner.components";

const Category = () => {
  const { category } = useParams();

  const categoriesData = useSelector(selectCategoriesData);
  const isLoading = useSelector(selectCategoriesIsLoading);
  // const { categoriesData } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesData[category]);
  // we done this because categoriesData may be null initaillly when component mount.
  // in that case products will be undefined.

  useEffect(() => {
    setProducts(categoriesData[category]);
  }, [category, categoriesData]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
      )}
    </>
  );
};
export default Category;
