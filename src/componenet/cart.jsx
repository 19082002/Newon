
import { useSelector, useDispatch } from "react-redux";
import { delItem, addItem } from "../redux/action/index";
import "../css/cart.css";
import { NavLink } from "react-router-dom";


export default function Cart() {
  const state = useSelector((state) => state.handle);
  // console.log(state)
  const dispatch = useDispatch();

  const handleClose = (item) => {
    item.qty = 1;
    dispatch(delItem(item));
  };
  const addproduct = (product) => {
    dispatch(addItem(product));
  };
  const delproduct = (product) => {
    dispatch(delItem(product));
  };
  const cartItems = (cartItem) => {
    return (
      <div className="item">
        <div className="first">
          <NavLink to={`/product/${cartItem.id}`}>
            <div className="item_image">
              <img src={cartItem.image}></img>
            </div>
          </NavLink>
          <div className="quantitybtn">
            <button onClick={() => addproduct(cartItem)}>+</button>
            <span>{cartItem.qty}</span>
            <button onClick={() => delproduct(cartItem)}>-</button>
          </div>
        </div>
        <div className="second">
          <div className="title">
            <h4>{cartItem.title}</h4>
          </div>
          <div className="price">
            ${cartItem.price}
          </div>
          <div className="button">
            <button className="wishlist">Move to wishlist</button>
            <button onClick={()=>handleClose(cartItem)} className="trash">Remove</button>
          </div>
        </div>
      </div>

      // </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="container ">
        <h1>Your Cart is Empty</h1>
      </div>
    );
  };
  const sumItems = () => {
    let sum = 0;
    state.map((items) => {
      sum = sum + items.qty * items.price;
    });
    return (
      <>
        <div className="endprice">
          <div className="totalprice">
            <div className="charge flex">
            <p>Price ({state.length} items) </p>
            <span className="price">${Math.ceil(sum)}</span>
            </div>
            <div className="delivery flex">
            <p>Delivery Charge </p>
            <span className="price">${Math.ceil(sum)}</span>
            </div>
            <div className="flex">
              <p></p>
              <button>Place order</button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
    <div className="cartcontainer">
      <div className="cartmain">
        <div className="heading">My Cart ({state.length})</div>
        <div className="cartpage">
          {state.length === 0 && emptyCart()}
          {state.length !== 0 && state.map(cartItems)}
        </div>
        
      </div>
      <div className="total">{state.length !== 0 && sumItems()}</div>
      </div>
    </>
  );
}
