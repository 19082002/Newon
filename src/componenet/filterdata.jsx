import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addwishItem } from "../redux/action/index.js";
export default function Filterdata() {
  const dispatch = useDispatch();
  const addproduct = (product) => {
    dispatch(addwishItem(product));
  };

  const data = useLocation().state.data;
  console.log(data);
  return (
    <>
      <div className="cardmain">
        {data &&
          data.map((item) => {
            var rate = item.rating.rate;
            return (
              <>
                <div className="card" key={item.id}>
                  <NavLink to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.title}
                    />
                  </NavLink>
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}....
                    </h5>
                    <div className="buy">
                      <div className="rating">
                        <p className="price">${item.price}</p>

                        <Star
                          size="18px"
                          className={`icon ${rate >= 1 && "checked"}`}
                        />

                        <Star
                          size="18px"
                          className={`icon ${rate >= 2 && "checked"}`}
                        />

                        <Star
                          size="18px"
                          className={`icon ${rate >= 3 && "checked"}`}
                        />

                        <Star
                          size="18px"
                          className={`icon ${rate >= 4 && "checked"}`}
                        />

                        <Star
                          size="18px"
                          className={`icon ${rate >= 5 && "checked"}`}
                        />
                      </div>
                      <NavLink to={`/product/${item.id}`} className="btn">
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                  <div className="hid">
                    <p
                      className="fvticon"
                      onClick={(e) => {
                        e.target.classList.add("active");
                        addproduct(item);
                      }}
                    >
                      {" "}
                      <Heart />
                    </p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
