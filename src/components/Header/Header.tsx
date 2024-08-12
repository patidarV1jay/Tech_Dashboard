import { useRef, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import "./HeaderStyles.css";
import WebLogo from "/web-logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Header = () => {
  const navRef = useRef<HTMLUListElement>(null);
  const [toggleList, setToggleList] = useState(-1);
  const handleClick = () => {
    navRef.current && navRef.current.classList.toggle("show");
  };
  const handleToggle = (id: number) => {
    setToggleList(id);
  };

  return (
    <div>
      <div className="header-container">
        <div className="row-center">
          <img src={WebLogo} alt="" className="web-logo" />
          <ul className="navigation-link-list" ref={navRef}>
            <div className="close-button block-display " onClick={handleClick}>
              x
            </div>
            <div
              className="navigation-list-item none-display"
              onClick={() => handleClick()}
            >
              Demos <FaCaretDown className="caret-icon" />
            </div>
            <div className="navigation-list-item none-display ">
              Pages <FaCaretDown className="caret-icon" />
            </div>
            <div className="navigation-list-item none-display">
              About <FaCaretDown className="caret-icon" />
            </div>
            <div className="navigation-list-item none-display">
              Dashboard <FaCaretDown className="caret-icon" />
            </div>
            <div className="navigation-list-item none-display">
              eCommerce <FaCaretDown className="caret-icon" />
            </div>
            <div className="side-bar-container block-display">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Search The Entire Store..."
                  className="search-input"
                />
                <FaMagnifyingGlass />
              </div>
              <hr className="hr-line" color="#ececec" />
              <div>
                <div className="sidebar-list-item">
                  <div className={`bg-light row-center`}>
                    <li className="bg-light">Home</li>
                    {toggleList === 1 ? (
                      <FaMinus
                        className="bg-light"
                        onClick={() => handleToggle(-1)}
                      />
                    ) : (
                      <FaPlus
                        className="bg-light"
                        onClick={() => handleToggle(1)}
                      />
                    )}
                  </div>
                  <div
                    className={`sidebar-inner-list ${
                      toggleList === 1 ? "show" : ""
                    }`}
                  >
                    <p className="bg-light">e</p>
                    <p className="bg-light">e</p>
                  </div>
                </div>
                <div className="sidebar-list-item row-center">
                  <li className="bg-light">Pages</li>
                  {toggleList === 2 ? (
                    <FaMinus
                      className="bg-light"
                      onClick={() => handleToggle(-1)}
                    />
                  ) : (
                    <FaPlus
                      className="bg-light"
                      onClick={() => handleToggle(2)}
                    />
                  )}
                </div>
                <div className="sidebar-list-item row-center">
                  <li className="bg-light">Courses</li>
                  <FaPlus className="bg-light" />
                </div>
                <div className="sidebar-list-item row-center">
                  <li className="bg-light">Dashboard</li>
                  <FaPlus className="bg-light" />
                </div>
                <div className="sidebar-list-item row-center">
                  <li className="bg-light">eCommerce</li>
                  <FaPlus className="bg-light" />
                </div>
              </div>
              <hr className="hr-line" color="#ececec" />
            </div>
          </ul>
          <div className="header-right row-center">
            <FaShoppingCart fontSize={24} className="header-icon" />
            <GiHamburgerMenu
              fontSize={24}
              className="block-display hamburger-icon"
              onClick={() => handleClick()}
            />
            <FaUser fontSize={24} className="none-display" />
            <button className="primary-button none-display">Get Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
