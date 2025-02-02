import React from "react";
import { Link, NavLink } from "@remix-run/react";
import ThemeToggle from "./ThemeToggle";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation Header */}
      <nav className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo/Home Link */}
              <Link to="/" className="flex items-center">
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  Flashlight Collection
                </span>
              </Link>

              {/* Main Navigation */}
              <div className="hidden sm:ml-8 sm:flex sm:space-x-4">
                <NavLink
                  to="/collection"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-100"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-200/70 dark:hover:bg-gray-700/50"
                    }`
                  }
                >
                  Collection
                </NavLink>
                <NavLink
                  to="/stats"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-100"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-200/70 dark:hover:bg-gray-700/50"
                    }`
                  }
                >
                  Statistics
                </NavLink>
                <NavLink
                  to="/batteries"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-100"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-200/70 dark:hover:bg-gray-700/50"
                    }`
                  }
                >
                  Batteries
                </NavLink>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Add Light
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Flashlight Collection Manager
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
