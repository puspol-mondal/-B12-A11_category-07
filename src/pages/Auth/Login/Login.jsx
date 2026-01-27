import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hook/useAuth/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signInUSer } = useAuth();
  const handelLogin = (data) => {
    // console.log(data);
    signInUSer(data.email, data.password).then((res) => {
      navigate(location?.state || "/");
      console.log(res);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handelLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className=" text-red-500" role="alert">
              Email is required
            </p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLengt: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              //   pattern: {
              //     value:
              //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/,
              //     message:
              //       "Password must include uppercase, lowercase, number & special character",
              //   },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

          <div>
            <Link to={"/auth/resetPassword"} className="link link-hover">
              Forgot password?
            </Link>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <SocialLogin />
      <div>
        <p className="">
          Are you new here?{" "}
          <Link
            state={location.state}
            className="link link-hover text-primary"
            to={"/auth/register"}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
