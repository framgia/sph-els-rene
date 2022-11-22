/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";

function CloudinaryWidget() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dyndobjql",
        uploadPreset: "lg98je9w",
      },
      function (err, res) {
        // console.log(res.info);

        if (!err && res && res.event === "success") {
          console.log("Done! Here is the image info: ", res.info);
        }
      }
    );
  }, []);

  return (
    <button onClick={() => widgetRef.current.open()}>Change Avatar</button>
  );
}

export default CloudinaryWidget;
