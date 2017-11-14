import api from "../../providers/api";
import { userLoggedIn } from "./auth";

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.bookWormJWT = user.token;
    dispatch(userLoggedIn(user))
  });
