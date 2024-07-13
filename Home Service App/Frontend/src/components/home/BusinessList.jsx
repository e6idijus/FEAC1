import { businesses } from "@/consts/business";
import BusinessCard from "./BusinessCard";

const BusinessList = ({ category }) => {
  const filteredBusiness = category
    ? businesses.filter((business) => business.category === category)
    : businesses;
  return (
    <div>
      {filteredBusiness.map((business) => (
        <BusinessCard
          key={business._id}
          business={business}
        />
      ))}
    </div>
  );
};

export default BusinessList;
