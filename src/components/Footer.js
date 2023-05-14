import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-center text-white text-sm mb-4">
            "Code is poetry, and design is an art. Together, they create digital masterpieces."
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/foram-gohil-aa1100168/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white mr-4"
            >
              LinkedIn
            </a>
            <a
              href="[YOUR_GITHUB_URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white mr-4"
            >
              GitHub
            </a>
            <a
              href="https://github.com/foram111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
