import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";
import { Helmet } from "react-helmet";
import titles from "../../title";

const Register = () => {
  const { register, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    register(email, password)
      .then((result) => {
        const user = result.user;
        // set user name and photo
        updateUserProfile(name, photo)
          .then(() => {
            navigate("/");
          })
          .catch((error) => console.log(error));
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>{titles.register}</title>
      </Helmet>
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 py-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-full max-w-md shadow-2xl shadow-slate-900 bg-gradient-to-r from-indigo-200 via-purple-200 to-slate-200">
            <div className="card-body">
              {/* login form */}
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  {/* email input field */}
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                    className="input input-bordered bg-inherit"
                  />
                </div>
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  {/* password input field */}
                  <input
                    type="text"
                    placeholder="Photo URL"
                    name="photo"
                    required
                    className="input input-bordered bg-inherit"
                  />
                </div>
                <div className="form-control mt-6">
                  {/* submit */}
                  <input
                    type="submit"
                    value="Register"
                    className="btn btn-info text-white"
                  />
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                  <div className="text-center mt-3">
                    <p>
                      Already Have an Account ?
                      <Link
                        to="/login"
                        className="text-rose-700 font-semibold ml-1">
                        Login
                      </Link>
                    </p>
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

export default Register;
