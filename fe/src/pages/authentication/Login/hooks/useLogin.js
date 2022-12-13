import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertError, alertWarning, storeLocalStorage } from "utils";

export const useLogin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      email: data.email,
      password: data.password,
    };

    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios.post(`/api/login`, postData).then((res) => {
        if (res.data) {
          if (res.data.validation_errors) {
            alertError("Please Fill The Forms Properly");
          } else if (res.data.message) {
            alertWarning("Wrong Credentials");
          } else {
            storeLocalStorage(res);
            return navigate("/");
          }
        } else {
          console.log("something went wrong");
        }
      });
    });
  };

  return { data, handleInput, handleSubmit };
};
