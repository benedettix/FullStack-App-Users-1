import React from "react";
import { useState } from "react";
import AuthService from "../../services/auth-service";
import { useNavigate } from "react-router-dom";

function Register() {
  const [state, setState] = useState({ name: "", pass: "" });

  const navigate = useNavigate();

  const onRegister = () => {
    AuthService.register(state).then((res) => {
      if (res.data === "Ok") {
        navigate("/");
      } else {
        navigate("/register");
      }
    });
  };

  return (
    <div className="container">
      <h1>Regiuster</h1>
      <div className="col-6 offset-3">
        <input
          type="text"
          onChange={(event) => setState({ ...state, name: event.target.value })}
          value={state.name}
          placeholder="name"
          className="form-control"
        />
        <br />
        <input
          type="password"
          onChange={(event) => setState({ ...state, pass: event.target.value })}
          value={state.pass}
          placeholder="password"
          className="form-control"
        />
        <br />
        <button onClick={onRegister} className="btn btn-primary">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
