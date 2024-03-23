import "../css/wishlist.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { delwishItem,addcartItem } from "../redux/action/index";

export default function Wishlist() {
  // const data=useLocation();
  // console.log(data);
  const state = useSelector((state) => state.f2);
  const dispatch = useDispatch();
  const addproduct = (product) => {
    dispatch(addcartItem(product));
  };
  const delproduct = (product) => {
    dispatch(delwishItem(product));
  };
  const wishItems = (Items) => {
    return (
      <>
        {/* <div className="itemcontainer"> */}
          <div className="main">
            <div className="card">
              <NavLink to={`/product/${Items.id}`}>
                <div className="image">
                  <img src={Items.image}></img>
                </div>
              </NavLink>
              <div className="title">
                <p>{Items.title.substring(0, 15)}...</p>
              </div>
              <div className="price">
                <p>${Items.price}</p>
              </div>
              <div className="footbtn">
                <button className="cartbtn" onClick={()=>addproduct(Items)}>Move to bag</button>
                <button className="removebtn" onClick={()=>delproduct(Items)}>Remove</button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </>
    );
  };
  const emptyWish = () => {
    return (
      <div className="empty">
        <h1>Your Cart is Empty</h1>
      </div>
    );
  };
  return (
    <>
      <div className="wishcontainer">
        <div className="title">Wishlist {state.length !== 0 && `(${state.length})`}</div>
        <div className="itemcontainer">
          {state.length === 0 && emptyWish()}
          {state.length !== 0 && state.map(wishItems)}
        </div>
      </div>
    </>
  );
}
// C:\Users\sanan\OneDrive\Desktop\Newon\src\componenet\wishlist.jsx
