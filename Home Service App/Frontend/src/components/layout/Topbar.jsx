import styles from "./topbar.module.scss";

const Topbar = () => {
  const links = [
    {
      href: "#",
      label: "Home",
    },
    {
      href: "#",
      label: "Services",
    },
    {
      href: "#",
      label: "About Us",
    },
  ];
  return (
    <div className={styles.topbar}>
      <div className={styles.leftSide}>
        <img
          src="./logo.svg"
          alt="logo"
        />
        <nav className={styles.navigation}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.rightSide}>
        <button>Login / Sign Up</button>
      </div>
    </div>
  );
};

export default Topbar;
