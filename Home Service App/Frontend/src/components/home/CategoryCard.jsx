const CategoryCard = ({ category }) => {
  const { name, icon } = category;
  const Icon = icon;

  return (
    <div>
      <Icon fontSize={48} />
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
