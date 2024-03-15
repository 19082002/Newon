import "../css/navbar.css";
import Login from "./login.jsx"
import { Outlet, Link, NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import { ShoppingCart, Heart,LogIn ,Search } from 'lucide-react';

export default function Navbar() {
  const state=useSelector((state)=>state.handle)
  return (
    <>
      <div className="navbar">
        <div className="left">
          <h3><Link to="/">Newon</Link></h3>
        </div>
        <div className="search">
            <input type="text" />
            <p className="searchic">
              <Search />
            </p>
            {/* <p>&#128269;</p> */}
          </div>  
          <div className="btn">

          <button className="login" onClick={()=><Login/>}> 
          <Heart strokeWidth="3" className="icon"/>
          </button>
          <NavLink to={`/login`} >                       
            <button className="login" > 
            <LogIn strokeWidth="3" className="icon"/>
            </button>
            </NavLink>
            <NavLink to={`/Cart`} >
            <button className=" cart">
              <ShoppingCart strokeWidth="3" className="icon"/>
              {state.length>0 && <span>{state.length}</span>}
               </button>
            </NavLink></div>
      </div>
      <Outlet />
    </>
  );
}
