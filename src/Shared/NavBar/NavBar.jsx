import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";
import icon from "../../../public/toy-car.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const list = (
    <>
      <li className="hover:bg-green-500 rounded-lg">
        <Link to="/" className="font-semibold hover:text-white">
          Home
        </Link>
      </li>
      <li className="hover:bg-amber-500 rounded-lg">
        <Link to="/allToys" className="font-semibold hover:text-white">
          All Toys
        </Link>
      </li>

      <li className="hover:bg-lime-500 rounded-lg">
        <Link to="/myToys" className="font-semibold hover:text-white">
          My Toys
        </Link>
      </li>
      <li className="hover:bg-teal-500 rounded-lg">
        <Link to="/addAToy" className="font-semibold hover:text-white">
          Add a Toy
        </Link>
      </li>

      <li className="hover:bg-fuchsia-500 rounded-lg">
        <Link to="/blogs" className="font-semibold hover:text-white">
          Blogs
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300  lg:px-10 max-w-7xl mx-auto">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] y-[-1] p-2 shadow bg-base-100 rounded-box w-52">
            {list}
          </ul>
        </div>
        <div className="w-[60px] mr-3 hidden md:block">
          <img src={icon} alt="" />
        </div>
        <h2 className="normal-case text-xl md:text-4xl text-black font-bold font-serif">
          Toy Emporium
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end w-5/12">
        {user ? (
          <>
            {/* tool tip created */}
            <label
              className="btn btn-circle avatar tooltip tooltip-bottom "
              data-tip={user.displayName}>
              <img className="w-12 rounded-full" src={user.photoURL} />
            </label>
            <button
              onClick={handleLogOut}
              className="btn shadow-2xl shadow-black bg-inherit ml-2 ">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
