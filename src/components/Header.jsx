import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatCurrency } from "../utils";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { totalQuantity, totalPrice } = useGlobalContext();
  return (
    <header className="bg-base-200">
      <div className="align-elements">
        <nav className="navbar p">
          <div className="navbar-start">
            <Link to="/" className="">
              <img src={Logo} alt="" className="w-10" />
            </Link>
          </div>
          <div className="navbar-end flex items-center">
            <div className="flex items-center">
              <label className="swap swap-rotate">
                <input
                  onChange={toggleTheme}
                  defaultChecked={theme == "corporate"}
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />
                <FaSun className="swap-off fill-current w-6 h-6" />
                <FaMoon className="swap-on fill-current w-6 h-6" />
              </label>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <FaShoppingCart className="w-5 h-5" />
                    <span className="badge badge-sm indicator-item">
                      {totalQuantity}
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">
                      {totalQuantity} Items
                    </span>
                    <span className="text-info text-xl font-medium">
                      Subtotal: {formatCurrency(totalPrice)}
                    </span>
                    <div className="card-actions">
                      <Link
                        to="/cart"
                        className="btn btn-primary btn-block btn-sm md:btn-md text-white"
                      >
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
