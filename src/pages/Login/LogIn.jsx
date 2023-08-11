import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";
import { Helmet } from "react-helmet";
import titles from "../../title";

const LogIn = () => {
  const { logIn, googleLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>{titles.logIn}</title>
      </Helmet>
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-full max-w-md shadow-2xl shadow-slate-900 bg-gradient-to-r from-indigo-200 via-purple-200 to-slate-200">
            <div className="card-body">
              {/* login form */}
              <form onSubmit={handleLogIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  {/* email input field */}
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    required
                    className="input input-bordered bg-inherit"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  {/* password input field */}
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                    className="input input-bordered bg-inherit"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  {/* submit */}
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-info text-white"
                  />
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                  <div className="text-center mt-3">
                    <p>
                      New to Toy Emporium ?
                      <Link
                        to="/register"
                        className="text-rose-700 font-semibold ml-1">
                        Register
                      </Link>
                    </p>
                  </div>
                  <div className="divider">OR</div>
                  <div
                    onClick={handleGoogleLogIn}
                    className="btn btn-outline btn-neutral rounded-box place-items-center ">
                    <img
                      className="w-7"
                      src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                      alt=""
                    />
                    <span>signin with google</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
