/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Button from "shared/components/Button/Button";
import Card from "shared/components/Card/Card";
import Form from "shared/components/Form/Form";
import FormInput from "shared/components/Form/FormInput";
import ContainerGuest from "shared/components/Layout/Container/ContainerGuest";
import GuestHeader from "shared/components/Layout/Header/HeadBanner";
import LayoutSpacer from "shared/components/Layout/Positioning/LayoutSpacer";
import { useLogin } from "./hooks/useLogin";

function Login() {
  const { data, handleInput, handleSubmit } = useLogin();

  return (
    <Fragment>
      <ToastContainer />

      <GuestHeader />

      <ContainerGuest>
        <Card
          title="Welcome to SELS Project"
          subtitle="Lest Break Language Barrier, please Sign In your acount"
          style="w-1/2 "
        >
          <LayoutSpacer>
            <Form handler={handleSubmit}>
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={data.email}
                handler={handleInput}
              />

              <FormInput
                label="Password"
                name="password"
                type="password"
                value={data.password}
                handler={handleInput}
              />

              <Button type="submit" text="Login" />
            </Form>
          </LayoutSpacer>
        </Card>
      </ContainerGuest>
    </Fragment>
  );
}

export default Login;
