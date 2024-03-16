
import "../css/login.css"
import { NavLink } from "react-router-dom";

export default function Login() {
  console.log("hgjk");
  return (
    <>
    <div className="contain">
    <div className="board">
      <div className="loginmain">
        <div className="first">
          <img src='/log.png'></img>
        </div>
        <div className="second">
          <p>Login</p>
          <div className="field">
          <div className="inputfield">
            <div className="user">
          <label htmlFor="fname" required>Username</label>
          <input type="text" name="fname" />
          </div>
          <div className="pass">
          <label htmlFor="fname">Password</label>
          <input type="password" name="fname" />
          </div>
          </div>
         
          <div className="loginbtn">
          <button>Login</button>
          <NavLink to={`/register`}>Sign up</NavLink>
          </div>
          </div>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
}
