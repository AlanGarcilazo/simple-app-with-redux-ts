import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../helpers";
import { PrivateRoutes, PublicRoutes, Roles } from "../../models";
import { createUser, resetUser, UserKey } from "../../redux/state/user";
import { getMorty } from "../../services";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}` , { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({...result,rol: Roles.ADMIN}));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
