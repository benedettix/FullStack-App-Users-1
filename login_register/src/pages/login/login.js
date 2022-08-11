import React from "react";
import { useState } from "react";
import AuthService from "../../services/auth-service";
import { useSelector, useDispatch } from "react-redux";

import { STORE_USER, REMOVE_USER } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = () => {
    AuthService.login(state).then((res) => {
      AuthService.storeUserData(res.config.data);
      dispatch(STORE_USER(res.config.data));
      navigate("/home");
    });
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <div className="col-6 offset-3">
        <input
          type="text"
          placeholder="name"
          onChange={(event) =>
            setState({ ...state, username: event.target.value })
          }
          className="form-control"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(event) =>
            setState({ ...state, password: event.target.value })
          }
          className="form-control"
        />
        <br />
        <button onClick={onLogin} className="btn btn-info">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
