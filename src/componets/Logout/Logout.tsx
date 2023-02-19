import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../helpers";
import { resetUser, UserKey } from "../../redux/state/user";
import { PublicRoutes } from '../../models/routes';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const LogOut = () => {
       
    }

    return ( <>
    <button onClick={LogOut}>Log Out</button>
    </> );
}
 
export default Logout;