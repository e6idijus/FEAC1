import Button from "../common/Button";
import SearchInput from "../common/SearchInput";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Find Home <span className={styles.primary}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>
        Explore Best Home Service & Repair near you
      </p>
      <div>
        <SearchInput />
        <Button rounded>
          <div>Search</div>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
