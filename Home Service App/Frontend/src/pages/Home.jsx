import Hero from "@/components/common/Hero";
import CategoryList from "@/components/home/CategoryList";
import BusinessList from "@/components/home/BusinessList";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryList />
      <h2>Popular businesses</h2>
      <BusinessList />
    </>
  );
};

export default Home;
