import '../css/login.css'
// import Login from "./login.jsx"
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <>
          <div className="contain">
    <div className="board">
      <div className="loginmain">
        <div className="first">
          <img src='/images/log.png'></img>
        </div>
        <div className="second">
          <p>Create Account</p>
          <div className="field">
          <div className="inputfield">
            <div className="user">
          <label htmlFor="fname" required>Username</label>
          <input type="text" name="fname" />
          </div>
          <div className="user">
          <label htmlFor="fname" required>Email</label>
          <input type="text" name="fname" />
          </div>
          <div className="pass">
          <label htmlFor="fname">Password</label>
          <input type="password" name="fname" />
          </div>
          </div>
          <div className="loginbtn">
          <button>Sign up</button>
          <NavLink to={`/login`}>Sign in</NavLink>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
    </>
  )
}
