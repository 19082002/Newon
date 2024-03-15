import { useState, useEffect } from "react";
import "../css/product.css";
import  Loading  from"./loading.jsx"
import { NavLink } from "react-router-dom";
import { Star } from 'lucide-react';

export default function Product() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);
  // const url = 'https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens';

  const fetchdata = async () => {
    // if(load)
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
    setLoad(false);
    console.log(json);
  };
  useEffect(() => {
    fetchdata();
  }, [load]);

  const Show = () => {
    return (
      // <div className="main">
      <>
        <div className="cardmain">
          {data &&
            data.map((item) => {
              return (
                <>
                  <div className="card" key={item.id}>
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.title.substring(0, 15)}....
                      </h5>
                      <div className="buy">
                        <div className="rating">
                          <p className="price">${item.price}</p>
                        
                            <Star size="18px" className="icon checked"/>
                        
                          <Star size="18px" className="icon checked"/>
                       
                          <Star size="18px" className="icon checked"/>
                        
                          <Star size="18px" className="icon checked"/>
                          
                        
                          <Star size="18px" className="icon"/>
                          
                        </div>
                        <NavLink to={`/product/${item.id}`} className="btn">
                          Buy Now
                        </NavLink>
                      </div>
                    </div>

                    <div className="hid">
                      <p className="fa fa-heart"></p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </>
    );
  };

  const fun = async (param) => {
    const url = `https://fakestoreapi.com/products/category/${param}`;
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
    setLoad(false);
    console.log(json);
  };
  return (
    <>
      {/* <h3 className="product">POPULAR PRODUCTS</h3> */}
      <div className="cardmain">
      <div className="cardboard">
        <div onClick={() => fetchdata()}>
          {" "}
          <div className="catgcard kitchen"></div>
          <span>All</span>
        </div>
        <div onClick={() => fun(`men's clothing`)}>
          <div className="catgcard men"></div>
          <span>Mens</span>
        </div>

        <div onClick={() => fun(`women's clothing`)}>
          <div className="catgcard women"></div>
          <span> Womens</span>
        </div>
        <div onClick={() => fun("electronics")}>
          <div className="catgcard kid"></div>
          <span> Electronics</span>
        </div>
        <div onClick={() => fun("jewelery")}>
          <div className="catgcard jwl"></div>
          <span> Jewelry</span>
        </div>
      </div>
      </div>
      {load ? <Loading /> : <Show />}
    </>
  );
}