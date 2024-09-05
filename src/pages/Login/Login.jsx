import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    
    // Reset Error Message
    setError('');

    // Calling SIgn In
    signIn(email, pass)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        setError('Password or Email is incorrect. Try Again!')
      });
  };
  return (
    <div className="bg-base-200 min-h-screen flex justify-evenly">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center  lg:text-left w-1/2">
          <img src={img} alt="" />
        </div>
        <div className=" w-1/2 card bg-base-100 max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleForm}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>

              <label className="text-center">
                {
                  error && <h1 className=" text-sm text-red-500">{error}</h1>
                }
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn text-white bg-[#FF3811]"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="text-center px-5 pb-5">
            Do not have any Account ? Please{" "}
            <Link className="text-blue-700" to="/signUp">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
