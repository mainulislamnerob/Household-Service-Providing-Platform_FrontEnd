import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMes, setErrorMes] = useState("");
  const [loading, setLoading] = useState(true);


  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };
  const [authTokens, setAuthTokens] = useState(getToken());

  useEffect(() => {
    if (authTokens) fetchUserProfile();
  }, [authTokens]);

  //   handle api error
  const handleApiError = (
    error,
    defaultMessage = "something went worng try again"
  ) => {
    if (error.response && error.response.data) {
      // field error show
      const errorMessage = Object.values(error.response.data).flat().join("\n");
      setErrorMes(errorMessage);
    } else {
      setErrorMes("Registration faild.try again", defaultMessage);
    }
  };

  // fetch user profile
  const fetchUserProfile = async () => {
    setLoading(true)
    try {
      const response = await apiClient.get("/auth/users/me", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      // console.log(response.data)
      setUser(response.data);
    } catch (err) {
      console.log("fetching err", err);
    }
    setLoading(false)
  };

  // update user profile
  const updateUserProfile = async (data) => {
    setErrorMes("");
    try {
      await apiClient.patch("/auth/users/me/", data, {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
    } catch (err) {
      console.log(err);
    }
  };

  // password change
  const changePassword = async (data) => {
    setErrorMes("");
    try {
      await apiClient.post("/auth/users/set_password/", data, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
    } catch (error) {
      return handleApiError(error);
    }
  };

  // login user
  // here userData already object so, directly pass this object
  const loginUser = async (userData) => {
    try {
      const response = await apiClient.post("/auth/jwt/create/", userData);
      // console.log(response.data)
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));

      // after login set user
      await fetchUserProfile();
    } catch (error) {
      console.log("Login err", error.data?.response);
    }
  };
  // Registration user
  const registeruser = async (userData) => {
    console.log("Register data:", userData);
    try {
      const response = await apiClient.post("/auth/users/", userData);
      return {
        success: true,
        message:
          "Registration successful. Check your email to activate your account. Redirecting...",
        data: response.data, // optional: server response
      };
    } catch (err) {
      console.log("Registration error:", err.response?.data || err.message);

      // handleApiError is your custom function; fallback message if API doesn't provide details
      return handleApiError(err, "Registration failed, please try again.");
    }
  };

  //logout user
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  return {
    user,
    errorMes,
    loading,
    loginUser,
    registeruser,
    logoutUser,
    updateUserProfile,
    changePassword,
  };
};

export default useAuth;