import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import { useContext, useEffect, useState } from "react";
import "./category.styles.scss";
import ProductCard from "../../Components/Product-card/product-cart.components";

const Category = () => {
  const { category } = useParams();
  const { categoriesData } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesData[category]);
  // we done this because categoriesData may be null initaillly when component mount.
  // in that case products will be undefined.

  useEffect(() => {
    setProducts(categoriesData[category]);
  }, [category, categoriesData]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </>
  );
};
export default Category;
