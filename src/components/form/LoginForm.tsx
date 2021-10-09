import React, { useState } from "react";
import { Button } from "components/Buttons";
import { Card } from "components/Cards";
import { Spacer, SpacingEnum } from "components/util/Spacer";
import { COLOR_ERROR } from "util/Constants";
import { FormInputUnderline } from "./Form";

import { useAuth } from "api/AuthenticationContext";
import { ErrorType } from "api/ApiUtil";

export const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<ErrorType>();

  const updateEmail = (newEmail: string) => {
    setEmail(newEmail);
    setError(undefined);
  };

  const updatePassword = (newPassword: string) => {
    setPassword(newPassword);
    setError(undefined);
  };

  const submit = () =>
    login(email, password).then((error: any) => setError(error));

  return (
    <>
      <form
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            submit();
          }
        }}
      >
        <div className="row form-title">
          <h2>Log in</h2>
        </div>
        <div className="row form-entry">
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => updateEmail(event.target.value)}
          />
          <FormInputUnderline />
        </div>
        <div className="row form-entry">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => updatePassword(event.target.value)}
          />
          <FormInputUnderline />
        </div>
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button label="Log In" onClick={submit} />
      </div>
      {error ? (
        <Card background={COLOR_ERROR}>
          <span>{error}</span>
        </Card>
      ) : (
        <></>
      )}
      <Spacer spacing={SpacingEnum.extra_small} />
      <div className="row central-form-entry">
        <a href="#forgot_password" style={{ margin: "0 auto" }}>
          Forgot password
        </a>
      </div>
      <div className="row central-form-entry">
        <div style={{ margin: "0 auto" }}>
          Don't have an account? &nbsp;
          <a href="mailto:contact@edgesports.tech">Contact Us</a>
        </div>
      </div>
    </>
  );
};
