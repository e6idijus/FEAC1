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
    <div>
      <div>
        <img
          src="./logo.svg"
          alt="logo"
        />
        <nav>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div>
        <button>Login / Sign Up</button>
      </div>
    </div>
  );
};

export default Topbar;
