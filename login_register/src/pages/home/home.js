import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthService from "../../services/auth-service";
import { useNavigate } from "react-router-dom";
import { STORE_USER, REMOVE_USER } from "../../features/userSlice";

function Home() {
  const userStore = useSelector((store) => store.userReducer);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (AuthService.getUserData() === null) {
      navigate("/");
    }
    if (userStore) {
      dispatch(STORE_USER(AuthService.getUserData()));
    }
  }, []);

  const onLogout = () => {
    AuthService.logout(navigate);
    dispatch(REMOVE_USER());
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 col-offset-3">
            <h1>Home Page</h1>
            <h2>Hello {userStore.name}</h2>
            <button className="btn btn-warning" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
