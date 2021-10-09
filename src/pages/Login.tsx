import { LoginForm } from "components/form/LoginForm";
import { Spacer, SpacingEnum } from "components/util/Spacer";
import { PlainHeaderLayout } from "layouts/header/HeaderLayout";

export const Login = () => (
  <PlainHeaderLayout>
    <div className="container">
      <Spacer spacing={SpacingEnum.large} />
      <div className="row">
        <div
          className="col-lg-6 col-md-8 col-sm-12 central-form"
          style={{ margin: "auto" }}
        >
          <LoginForm />
        </div>
      </div>
    </div>
  </PlainHeaderLayout>
);
