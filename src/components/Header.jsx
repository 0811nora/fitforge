import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header className="fixed z-10 my-6 hidden w-full md:block">
        <nav className="mx-auto max-w-2xl rounded-full bg-swirl-50/70 shadow-md shadow-fantasy-300">
          <ul className="flex h-13 items-center justify-center gap-11 font-bold text-fantasy-600">
            <li>
              <NavLink to="/preference" className="hover: p-3 hover:text-fantasy-700">
                開始訓練
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="p-3 hover:text-fantasy-700">
                本週課表
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="p-3 hover:text-fantasy-700">
                <img className="w-26" src="fitForge-logo.svg" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/plans" className="p-3 hover:text-fantasy-700">
                方案價格
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="p-3 hover:text-fantasy-700">
                登入
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <header className="fixed z-10 my-6 w-full px-4 md:hidden">
        <div className="relative">
          <nav className="relative mx-auto max-w-2xl rounded-full bg-swirl-50/70 shadow-md shadow-fantasy-300">
            <div className="flex items-center justify-center">
              <NavLink to="/" className="p-3 hover:text-fantasy-700">
                <img className="mb:mt-0 mt-1 w-26" src="fitForge-logo.svg" alt="" />
              </NavLink>
              <button className="absolute top-0 right-0 mt-0.5 px-6 py-3" onClick={() => setToggleMenu(!toggleMenu)}>
                <img src="hamburger.svg" alt="" />
              </button>
            </div>
          </nav>

          {toggleMenu && (
            <ul className="absolute top-14 right-0 w-35 rounded-2xl bg-fantasy-100/80 p-2 text-center font-bold text-fantasy-800 shadow-md shadow-fantasy-300">
              <li className="p-3">
                <NavLink to="/preference" className="hover: p-3 hover:text-fantasy-700">
                  開始訓練
                </NavLink>
              </li>
              <li className="p-3">
                <NavLink to="/" className="p-3 hover:text-fantasy-700">
                  本週課表
                </NavLink>
              </li>
              <li className="p-3">
                <NavLink to="/plans" className="p-3 hover:text-fantasy-700">
                  方案價格
                </NavLink>
              </li>
              <li className="p-3">
                <NavLink to="/login" className="p-3 hover:text-fantasy-700">
                  登入
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
