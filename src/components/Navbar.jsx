import React, { useState } from "react";
import logo from "../MovieLogo.jpg";
import { Link } from "react-router-dom";
function Navbar({ login,handleLogin }) {
  const hh=()=>{
    console.log(11);
  }
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4 justify-between">
      <img className="w-[50px]" src={logo} alt="" />
      <div className="pl-4">
        <Link to="/" className="text-blue-600 text-2.8xl font-bold m-6">
          Movies
        </Link>
        <Link className="text-blue-600 text-2.8xl font-bold" to="/watchList">
          Watchlist
        </Link>
      </div>
      <div className="pr-8">
        <Link to="/login" className="text-green-500 text-2.8xl font-bold m-6" >
          {" "}
         <button onClick={()=>handleLogin(login)}>{login ? "Logout" : "Login"}{" "}</button> 
        </Link> 
      </div>
    </div>
  );
}

export default Navbar;
