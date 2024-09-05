import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;

    // Reset Error Message
    setError('');

    //Call SignUp method
    signUp(email, pass)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        setError('Something wrong occurred! Try Again.');
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
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="text-center">
              {
                error && <h1 className="text-red-600">{error}</h1>
              }
            </div>
            <div className="form-control mt-6">
              <input
                className="btn text-white bg-[#FF3811]"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div className="text-center px-5 pb-5">
            Already have an Account ? Please{" "}
            <Link className="text-blue-700" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
