import classes from "../styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

function Account() {
  const { currentUser,logout } = useAuth();

  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            {" "}
            account_circle{" "}
          </span>
          <span>{currentUser.displayName}</span>
          <span onClick={logout} className="material-icons-outlined" title="Logout">
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

export default Account;
