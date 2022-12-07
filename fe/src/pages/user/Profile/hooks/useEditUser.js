import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAction } from "../../../../redux/actions/actions";
import * as actionType from "../../../../redux/actions/actionTypes";

export const useEditUser = (props) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    avatar: "",
  });

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleData = (e) => {
    setData({
      email: props.user.email,
      first_name: props.user.first_name,
      middle_name: props.user.middle_name,
      last_name: props.user.last_name,
      avatar: props.user.avatar,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      first_name: data.first_name,
      middle_name: data.middle_name,
      last_name: data.last_name,
    };

    dispatch(
      updateAction(
        postData,
        `/api/users/${props.user.id}`,
        actionType.UPDATE_USERS,
        "api/users"
      )
    );

    localStorage.setItem("user_name", data.first_name + " " + data.last_name);
  };

  // Avatar Upload | Cloudinary
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dyndobjql",
        uploadPreset: "lg98je9w",
        folder: "sels/users/avatar",
      },
      function (err, res) {
        if (!err && res && res.event === "success") {
          const postData = {
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name,
            avatar: res.info.secure_url,
          };

          dispatch(
            updateAction(
              postData,
              `/api/users/${props.user.id}`,
              actionType.UPDATE_USERS,
              "api/users"
            )
          );

          setData({
            email: props.user.email,
            first_name: props.user.first_name,
            middle_name: props.user.middle_name,
            last_name: props.user.last_name,
            avatar: res.info.secure_url,
          });
        }
      }
    );
  });

  return { data, widgetRef, handleData, handleSubmit, handleInput };
};
