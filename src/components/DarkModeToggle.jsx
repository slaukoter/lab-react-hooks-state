import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  function handleToggle() {
    setDarkMode((prev) => !prev);
  }

  return (
    <button onClick={handleToggle} aria-label="toggle-theme">
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
