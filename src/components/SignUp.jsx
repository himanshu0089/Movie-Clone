import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const initialValues={
    name:"",
    username:"",
    password:""
  }
  const[error,setError]=useState({})
  const handleChange=(e)=>{
      const {name, value}=e.target;
      setFormValue({...formValue, [name]:value})
  }
  const validateForm=()=>{
    let newError={}
     if(!formValue.name){
       newError.name='Name is required'
     }
     if(!formValue.username){
      newError.username='Username is required'
    }
    if(!formValue.password){
      newError.password='Password is required'
    }
    setError(newError);

    return Object.keys(newError).length === 0;
  }
  const[formValue,setFormValue]=useState(initialValues)
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid=validateForm();
    if(isValid){
    navigate("/login");}
    else{
      console.log(error)
    }
  };
  return (
    <div className=" h-[300px]">
      <div className="text-center text-blue-600 my-4">
        <h3>Create your Account</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col text-blue-400 text-center">
          <div className="my-2">
            {" "}
            <input
              className="bg-gray-200 h-[30px] w-[300px] pl-3"
              type="text"
              name="name"
              value={formValue.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />{" "}
          </div>
          {error.name && <div className="text-red-500 ">{error.name}</div>}

          <div className="my-2">
            <input
              className="bg-gray-200 h-[30px] w-[300px] pl-3"
              type="email"
               name="username"
              value={formValue.username}
              onChange={handleChange}
              placeholder="Enter email id"
            />
           
          </div>
          {error.username && <div className="text-red-500 ">{error.username}</div>}
          <div className="my-2">
            <input
              className="bg-gray-200 h-[30px] w-[300px] px-3"
              type="password"
               name="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          {error.password && <div className="text-red-500">{error.password}</div>}
          <div className="my-2 py-4 border-red-200">
            {" "}
            <button className="rounded-xl bg-blue-600 p-2 text-white font-bold ">Sign Up</button>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default SignUp;
