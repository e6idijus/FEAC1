import CategoryCard from "./CategoryCard";
import styles from "./CategoryList.module.scss";
import { categories } from "@/consts/category";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoryList;
