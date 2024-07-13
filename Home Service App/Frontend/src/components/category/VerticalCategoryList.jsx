import { categories } from "@/consts/category";
import CategoryCard from "./CategoryCard";

const VerticalCategoryList = () => {
  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
        />
      ))}
    </div>
  );
};

export default VerticalCategoryList;
