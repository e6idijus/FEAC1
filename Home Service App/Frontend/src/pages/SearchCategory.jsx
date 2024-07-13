import { useParams } from "react-router-dom";
import VerticalCategoryList from "@/components/category/VerticalCategoryList";

const SearchCategory = () => {
  const { category } = useParams();

  return (
    <div>
      <div>
        <VerticalCategoryList />
      </div>
    </div>
  );
};

export default SearchCategory;
