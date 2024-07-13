import Button from "../common/Button";

const BusinessCard = ({ business }) => {
  return (
    <div>
      {business.images.length && (
        <img
          src={business.images[0].url}
          alt={business.name}
        />
      )}
      <div>
        <span>{business.category}</span>
        <h3>{business.name}</h3>
        <p>{business.contactPerson}</p>
        <p>{business.address}</p>
        <Button>Book now</Button>
      </div>
    </div>
  );
};

export default BusinessCard;
