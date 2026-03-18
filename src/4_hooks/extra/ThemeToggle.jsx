import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    setTheme(savedTheme);

    document.documentElement.setAttribute("data-bs-theme", savedTheme);
  }, []);


  const changeTheme = (newtheme) => {
    setTheme(newtheme);

    document.documentElement.setAttribute("data-bs-theme", newtheme);

    localStorage.setItem("theme", newtheme);
  };

  return (
    <div className="btn-group" role="group" aria-label="Theme Toggle">
      <button
        type="button"
        className={`btn btn-sm btn-dark ${theme === "dark" ? "active" : ""}`}
        onClick={() => changeTheme("dark")}
        disabled={theme === "dark"}
      >
        <FaMoon /> Dark
      </button>
      <button
        type="button"
        className={`btn btn-sm btn-light ${theme === "light" ? "active" : ""}`}
        onClick={() => changeTheme("light")}
        disabled={theme === "light"}
      >
        <FaSun /> Light
      </button>
    </div>
  );
};

export default ThemeToggle;
