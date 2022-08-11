import axios from "axios";

class AuthService {
  static register(body) {
    return axios.post("http://localhost:9000/register", body);
  }
  static login(body) {
    return axios.post("http://localhost:9000/login", body);
  }

  static logout(navigate) {
    localStorage.removeItem("app_user_data");
    navigate("/");
  }

  static storeUserData(user_data) {
    console.log(user_data);
    localStorage.setItem("app_user_data", JSON.stringify(user_data));
  }

  static getUserData() {
    let userData = localStorage.getItem("app_user_data");
    return userData ? JSON.parse(userData) : null;
  }
}

export default AuthService;
