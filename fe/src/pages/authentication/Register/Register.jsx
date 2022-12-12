import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Button from "shared/components/Button/Button";
import Form from "shared/components/Form/Form";
import FormInput from "shared/components/Form/FormInput";
import ContainerGuest from "shared/components/Layout/Container/ContainerGuest";
import HeadBanner from "shared/components/Layout/Header/HeadBanner";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import LayoutSpacer from "shared/components/Layout/Positioning/LayoutSpacer";
import { useRegister } from "./hooks/useRegiester";

function Register() {
  const { data, handleSubmit, handleInput } = useRegister();
  return (
    <Fragment>
      <ToastContainer />
      <HeadBanner />

      <LayoutSpacer>&nbsp;</LayoutSpacer>

      <ContainerGuest>
        <LayoutCenterChildren>
          <h1>Welcome to SELS Project</h1>
        </LayoutCenterChildren>

        <LayoutCenterChildren>
          <p>Lest Break Language Barrier, please register your account.</p>
        </LayoutCenterChildren>

        <LayoutSpacer>
          <Form handler={handleSubmit}>
            <FormInput
              label={"First Name"}
              name={"first_name"}
              value={data.first_name}
              handler={handleInput}
            />

            <FormInput
              label={"Middle Name"}
              name={"middle_name"}
              value={data.middle_name}
              handler={handleInput}
            />

            <FormInput
              label={"Last Name"}
              name={"last_name"}
              value={data.last_name}
              handler={handleInput}
            />

            <FormInput
              label={"Email"}
              name={"email"}
              type={"email"}
              value={data.email}
              handler={handleInput}
            />

            <FormInput
              label={"Password"}
              name={"password"}
              type={"password"}
              value={data.password}
              handler={handleInput}
            />

            <FormInput
              label={"Confirm Password"}
              name={"password_confirmation"}
              type={"password"}
              value={data.password_confirmation}
              handler={handleInput}
            />

            <Button type={"submit"} text={"Register"} />
          </Form>
        </LayoutSpacer>
      </ContainerGuest>
    </Fragment>
  );
}

export default Register;
