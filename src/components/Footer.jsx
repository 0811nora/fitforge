import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-fantasy-300 py-12">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="text-lg font-bold text-fantasy-50">
            <img className="w-26" src="fitForge-logo.svg" alt="" />
          </NavLink>
          <p className="text-center text-swirl-600">
            © 2026 FitForge．All rights reserved．使用測試金流，不涉及實際交易
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
