import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hook/useAuth/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { registerUser, profileUpdate } = useAuth();
  const submitRagister = async (data) => {
    try {
      const imageFile = data.photo[0];
      const userRes = await registerUser(data.email, data.password);
      console.log("user", userRes.user);

      const formData = new FormData();
      formData.append("image", imageFile);

      const image_API_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`;
      const imgRes = await axios.post(image_API_Url, formData);
      const imagUrl = imgRes.data.data.url;
      console.log("Image URL:", imagUrl);

      const userProfile = {
        displayName: data.name,
        photoURL: imagUrl,
      };

      await profileUpdate(userProfile);
      navigate(location.state);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitRagister)}>
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className=" text-red-500" role="alert">
              Name is required
            </p>
          )}{" "}
          {/* Photo */}
          <label className="label">Photo</label>
          <input
            type="file"
            className="file-input w-full"
            placeholder="Your Name"
            {...register("photo")}
          />
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
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/,
              //   message:
              //     "Password must include uppercase, lowercase, number & special character",
              // },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      <p className="">
        Are you new here?{" "}
        <Link
          state={location.state}
          className="link link-hover text-primary"
          to={"/auth/login"}
        >
          Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
