import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth/useAuth";

const ResetPassword = () => {
  const { forgetPassword } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handelReset = (data) => {
    console.log(data.email);
    forgetPassword(data.email).then(() => {
      alert("check your email");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handelReset)}>
        {/* email */}
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

        <button className="btn btn-neutral mt-4">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
