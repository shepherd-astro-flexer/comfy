import { Link } from "react-router-dom";
import { EmailInput, PasswordInput, SubmitBtn } from "../components";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-3xl font-bold">Login</h2>
          <EmailInput />
          <PasswordInput />
          <SubmitBtn text="Login" icon={<FiLogIn className="text-lg"/>} />
          <p className="mt-2">
            Not a member yet?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
