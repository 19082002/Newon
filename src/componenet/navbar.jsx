import "../css/navbar.css";
import Login from "./login.jsx";
import { useState, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Heart, LogIn, Search } from "lucide-react";

export default function Navbar() {
  const [data, setData] = useState({ ui: "gyui" });
  const [filterdata, setFilterdata] = useState(true);
  const [load, setLoad] = useState(false);
  const fetchdata = async () => {
    // if(load)
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
    setFilterdata(json);
    // console.log(json);
  };
  useEffect(() => {
    fetchdata();
    setLoad(true);
  }, [load]);
  const handlefilter = (value) => {
    const res = filterdata.filter((f) => f.title.toLowerCase().includes(value.toLowerCase()));
    setData(res);
  };
  useEffect(() => {
    // console.log('data: ', data)
  }, [data]);

  const state = useSelector((state) => state.f1);
  return (
    <>
      <div className="navbar">
        <div className="left">
          <h3>
            <Link to="/">Newon</Link>
          </h3>
        </div>
        <div className="search">
          <input type="text" onChange={(e) => handlefilter(e.target.value)} />
          <p className="searchic">
            <Link to={"/data"} state={{ data }}>
              <Search />
            </Link>
          </p>
          {/* <p>&#128269;</p> */}
        </div>
        <div className="btn">
          <NavLink to={`/wishlist`}>
            <button className="login" onClick={() => <Login />}>
              <Heart strokeWidth="3" className="icon" />
            </button>
          </NavLink>
          <NavLink to={`/login`}>
            <button className="login">
              <LogIn strokeWidth="3" className="icon" />
            </button>
          </NavLink>
          <NavLink to={`/Cart`}>
            <button className=" cart">
              <ShoppingCart strokeWidth="3" className="icon" />
              {state.length > 0 && <span>{state.length}</span>}
            </button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
