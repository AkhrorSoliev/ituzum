import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-base-200">
      <div className="align-elements">
        <nav className="navbar">
          <div className="navbar-start">
            <Link to="/" className="btn btn-ghost normal-case text-xl ">
              <img src={Logo} alt="" className="w-10" />
            </Link>
          </div>
          <div className="navbar-end">
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <FaShoppingCart className="w-5 h-5" />
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <Link
                        to="/cart"
                        className="btn btn-primary btn-block btn-sm md:btn-md"
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
