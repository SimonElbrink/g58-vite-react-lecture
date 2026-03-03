const DynamicNavbar = () => {
  const navLinks = [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "Features", href: "#" },
    { id: 3, name: "Pricing", href: "#" },
    { id: 4, name: "Contact", href: "#" },
    { id: 5, name: "Sign Up", href: "#" },
    { id: 6, name: "Sign In", href: "#" },
  ];

  const renderNavLinks = () => {
    const liElements = navLinks.map((link) => {
      const liElement = (
        <li className="nav-item">
          <a className="nav-link" href={link.href} key={link.id}>
            {link.name}
          </a>
        </li>
      );

      return liElement;
    });

    return liElements;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="navbar-brand-red">MyApp</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {
            navLinks.map((link) => (
              <li className="nav-item">
                <a className="nav-link" href={link.href} key={link.id}>
                  {link.name}
                </a>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DynamicNavbar;
