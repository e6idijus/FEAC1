import { useNavigate, generatePath, useParams } from "react-router-dom";
import classNames from "classnames";
import UrlIcon from "../common/UrlIcon";
import { ROUTES } from "@/router/consts";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category }) => {
  const params = useParams();
  const { name } = category;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });

  return (
    <div
      className={styles.card}
      onClick={() => navigate(categoryPath)}
    >
      <UrlIcon
        url={category.url}
        style={{ width: 48, height: 48, backgroundColor: category.color }}
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CategoryCard;
