import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertError, storeLocalStorage } from "../../../../utils";

export const useRegister = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      first_name: data.first_name,
      middle_name: data.middle_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };

    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios
        .post(`/api/register`, postData)
        .then((res) => {
          if (res.data) {
            storeLocalStorage(res);
            return navigate("/");
          } else {
            console.log("something went wrong");
          }
        })
        .catch((err) => {
          if (err.response.data.message.includes("Duplicate entry")) {
            alertError("Email is already taken. Please use another email.");
          } else {
            Object.keys(err.response.data.errors).map((key, index) =>
              alertError(err.response.data.errors[key][0])
            );
          }
        });
    });
  };

  return {
    data,
    handleSubmit,
    handleInput,
  };
};
