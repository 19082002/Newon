import { useParams } from "react-router";
import { useState, useEffect } from "react";
import {useDispatch } from "react-redux";
import { addcartItem } from "../redux/action";
import "../css/show.css";
import  Loading  from"./loading.jsx"
import { Star,LockKeyhole  } from 'lucide-react';

export default function Showproduct() {
  // const location = useLocation()
  const id = useParams().id;
  const [data, setData] = useState();
  const [prload, setLoad] = useState(true);

  const dispatch=useDispatch();
  const addproduct=(product)=>{
      dispatch(addcartItem(product));
  }
 
  useEffect(() => {
    const fetchdata = async () => {
      // if(load)
      const url = `https://fakestoreapi.com/products/${id}`;
      console.log(url);
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoad(false);
      // console.log(json);
    };
    fetchdata();
  }, [prload]);

  const Show = () => {
    return (
      <>
        <div className="mainshow" key={data.id}>
          <div className="image">
            <img src={data.image} className="img" />
          </div>
          <div className="show">
            <p className="title">{data.title}</p>
            <p className="desc">{data.description}</p>
            <div className="prices">
              <p className="special">Special Price</p>
              <p className="pric">${data.price}</p>
            </div>

            <div className="rate">
              <p className="rating">
                {data.rating.rate}
               
                  <Star strokeWidth="3" size="1rem" className="icon"/>
                
              </p>
              <p className="count">{data.rating.count} Ratings</p>
            </div>
            <div className="btns">
              <button className="adcart btn"
              onClick={()=>addproduct(data)}>
                <LockKeyhole /> Add to cart
              </button>
              <button className="buynow btn">Buy now</button>
            </div>
          </div>
        </div>
      </>
    );
  };


  return <>{prload ? <Loading /> : <Show />}</>;
}
