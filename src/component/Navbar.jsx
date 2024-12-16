import { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle "dark" class on the root HTML element
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
          My Portfolio
        </a>
        <div className="flex items-center">
          {/* Light/Night Mode Toggle Button */}
          <button
            onClick={toggleMode}
            className="mr-4 px-3 py-1 border rounded text-gray-800 dark:text-white border-gray-800 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isDarkMode ? "Light Mode" : "Night Mode"}
          </button>

          {/* Navigation Links */}
          <a
            href="#about"
            className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative group"
          >
            About
            <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative group"
          >
            Projects
            <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative group"
          >
            Contact
            <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
