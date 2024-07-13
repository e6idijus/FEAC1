import UrlIcon from "../common/UrlIcon";

const CategoryCard = ({ category }) => {
  const { name } = category;

  return (
    <div>
      <UrlIcon
        url={category.url}
        style={{ width: 48, height: 48, backgroundColor: category.color }}
      />
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
