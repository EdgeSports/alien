import { useDataConsumer } from "api/ApiUtil";
import { SoftDivider } from "components/Barriers";
import { Button } from "components/Buttons";
import { Card } from "components/Cards";
import { useState } from "react";
import { COLOR_ERROR } from "util/Constants";
import { prefixApi } from "util/Proxy";
import { FormInputUnderline } from "./Form";

const ChangePasswordForm = () => {
  const [curPassword, setCurPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confNewPassword, setConfNewPassword] = useState("");
  const [error, setError] = useState("");
  const { submitData, loading } = useDataConsumer(
    prefixApi("/api/v1/user/password"),
    "post"
  );

  const buttonDisabled =
    loading ||
    ![curPassword, newPassword, confNewPassword].every((val) => Boolean(val));

  const submit = () => {
    const data = {
      current_password: curPassword,
      new_password: newPassword,
      confirm_new_password: confNewPassword,
    };
    console.log(data);
    submitData(data, false)
      .then(() => {
        setCurPassword("");
        setNewPassword("");
        setConfNewPassword("");
        setError("");
      })
      .catch((error) => {
        const err = error.response.data;
        if (err.detail !== undefined) {
          setError(err.detail);
        } else {
          setError(err);
        }
      });
  };

  return (
    <>
      <h1>Change Password</h1>
      <SoftDivider />
      <form>
        <div className="form-entry">
          <input
            name="current_password"
            type="password"
            placeholder="Current Password"
            value={curPassword}
            onChange={(event) => setCurPassword(event.target.value)}
          />
          <FormInputUnderline />
        </div>
        <div className="form-entry">
          <input
            name="new_password"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <FormInputUnderline />
        </div>
        <div className="form-entry">
          <input
            name="confirm_new_password"
            type="password"
            placeholder="Confirm New Password"
            value={confNewPassword}
            onChange={(event) => setConfNewPassword(event.target.value)}
          />
          <FormInputUnderline />
        </div>
        {error && (
          <Card background={COLOR_ERROR}>
            <span>{error}</span>
          </Card>
        )}
        <Button label="Submit" onClick={submit} disabled={buttonDisabled} />
      </form>
    </>
  );
};

export { ChangePasswordForm };
