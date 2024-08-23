import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";

function Login({login,setLogin}) {
  const navigate = useNavigate();
  //  const[login,setLogin]=useState(false)

  const initialValues = {
    username: "",
    password: "",
  };
  const [formValue, setFormValue] = useState(initialValues);
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validateForm = () => {
    let newError = {};
    
    if (!formValue.username) {
      newError.username = "Username is required";
    }
    if (!formValue.password) {
      newError.password = "Password is required";
    }
    setError( newError);

    return Object.keys(newError).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setLogin(true);
      console.log(login)
      navigate("/");
    } else {
      console.log(error);
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col text-center">
          <div className="mt-8">
            <label className="">Username: </label>
            <input
              className=" h-[2rem] w-[15rem] ml-2 bg-gray-200 pl-3"
              type="text"
              name="username"
              value={formValue.username}
              onChange={handleChange}
              placeholder="Enter email id"
            />
            <label className="ml-8">Password: </label>
            <input
              className="h-[2rem] w-[15rem] ml-2 bg-gray-200 pl-3"
              type="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            {error.username && <div className="text-red-500 mt-3">{error.username}</div>}
            {error.password && <div className="text-red-500 mt-3">{error.password}</div>}
            <div className="mt-7">
              <button
                className="rounded-xl bg-green-500 p-2 text-gray-800 font-bold"
                type="submit"
              >
                Sign in
              </button>
             
            </div>
            <div className="text-green-800 mt-1">
            <Link to='/recover-account' >Forget Password</Link>
            </div>
            
          </div>
          <div>
            <h3>
              Do not have an account ?{" "}
              <button className="p-2 text-blue-600" onClick={handleSignup}>
                Sign Up
              </button>
            </h3>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
