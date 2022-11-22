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

export const removeLocalStorage = () => {
  localStorage.removeItem("user_token");
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_email");
  localStorage.removeItem("user_role");
  localStorage.removeItem("user_id");
};
