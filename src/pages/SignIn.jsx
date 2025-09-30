// import { Link, NavLink, useNavigate } from "react-router";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuthContext from "../hook/useAuthContext";
import authApiClient from "../services/auth-api-client";

const SignIn = () => {
  const { loginUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  //   for user navigate function call
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cartGenerate = () => {
    try{
      const res = authApiClient("cart/") // POST /api/cart/
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await loginUser(data);
      //generate cart every user login
      cartGenerate()
      // when user login successful navigate this url
      navigate("/");
    } catch (err) {
      console.log("Login faild", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 mx-auto shadow-2xl p-6 md:my-10">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <p className="text-bases-500 mb-10">
        Enter your email and password to access your email
      </p>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
            className="w-full px-3 py-2 outline rounded-xl"
            name="email"
            id="email"
          />
          {errors.email && (
            <span className="text-sm text-red-200">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", { required: "password is required" })}
            placeholder="Enter your password"
            className="w-full px-3 py-2 outline rounded-xl"
            name="password"
            id="password"
          />
          {errors.password && (
            <span className="text-sm text-red-200">{errors.email.message}</span>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-outline bg-amber-700 mt-10 w-full rounded-xl text-white"
          disabled={loading}
          value={loading ? "Loggin in..." : "Login"}
        />
      </form>
      
    </div>
  );
};

export default SignIn;
