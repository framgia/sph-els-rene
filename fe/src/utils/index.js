import { toast } from "react-toastify";

const alertOptions = {
  position: "bottom-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const isAdmin = () => {
  if (localStorage.getItem("user_role") === "admin") {
    return true;
  } else {
    return false;
  }
};

export const isUser = () => {
  if (localStorage.getItem("user_role") === "user") {
    return true;
  } else {
    return false;
  }
};

export const getUserId = () => {
  return parseInt(localStorage.getItem("user_id"));
};

export const getUserToken = () => {
  return localStorage.getItem("user_token");
};

export const isUndefined = (item) => {
  if (item === undefined) {
    return true;
  } else {
    return false;
  }
};

export const storeLocalStorage = (res) => {
  localStorage.setItem("user_id", res.data.user.id);
  localStorage.setItem("user_token", res.data.token);
  localStorage.setItem("user_id", res.data.user.id);
  localStorage.setItem(
    "user_name",
    res.data.user.first_name + " " + res.data.user.last_name
  );
  localStorage.setItem("user_email", res.data.user.email);
  localStorage.setItem("user_role", res.data.user.role);
};

export const removeLocalStorage = () => {
  localStorage.removeItem("user_token");
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_email");
  localStorage.removeItem("user_role");
  localStorage.removeItem("user_id");
};

export const alertError = (message) => {
  toast.error(message, alertOptions);
};

export const alertWarning = (message) => {
  toast.warn(message, alertOptions);
};

export const alertSuccess = (message) => {
  toast.success(message, alertOptions);
};
