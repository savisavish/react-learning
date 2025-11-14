import './header.css';
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { useCart } from '../context/Product_context';
import { RiArrowDropDownLine } from "react-icons/ri";

function Header() {
  const { cart } = useCart()
  return (
    <>
      <header className="header">
        <nav className="header__nav header__nav--left">
          <ul className="header__list">
          <li className="header__item">
              <NavLink
                
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                Hooks <RiArrowDropDownLine />
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/crud"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                Crud
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/useeffecthook"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                UseEffect
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/usereducerhook"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                UseReducer
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/showmore"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                Show More
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/pagination"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                Pagination
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/infinitescroll"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                Infinite Scroll
              </NavLink>
            </li>
            <li
              className="header__item">
              <NavLink
                to="/shopping"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                Shopping
              </NavLink>
            </li>
            <li
              className="header__item">
              <NavLink
                to="/css"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                CSS
              </NavLink>
            </li>
            <li
              className="header__item">
              <NavLink
                to="/javascript"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                Javascript
              </NavLink>
            </li>
            <li
              className="header__item">
              <NavLink
                to="/loaderstemplate"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                Loaders
              </NavLink>
            </li>
            <li
              className="header__item">
              <NavLink
                to="/form"
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="header__nav header__nav--right">
          <ul className="header__list">
            <li className="header__item">
              <NavLink
                to="/cart"
                className="header__link"
              >
                <FaCartPlus size={24} />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/profile"
                className="header__link"
              >
                <CgProfile size={24} />
              </NavLink>
            </li>

          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
