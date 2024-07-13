import VerticalCategoryList from "@/components/category/VerticalCategoryList";
import styles from "./SearchCategory.module.scss";

const SearchCategory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <VerticalCategoryList />
      </div>
    </div>
  );
};

export default SearchCategory;
