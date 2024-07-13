import VerticalCategoryList from "@/components/category/VerticalCategoryList";
import BusinessList from "@/components/home/BusinessList";
import styles from "./SearchCategory.module.scss";

const SearchCategory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <VerticalCategoryList />
      </div>
      <div className={styles.categoryContainer}>
        <BusinessList className={styles.businessList} />
      </div>
    </div>
  );
};

export default SearchCategory;
