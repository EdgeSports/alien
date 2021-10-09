import { RouteComponentProps } from "react-router-dom";

import { Spacer, SpacingEnum } from "components/util/Spacer";
import { PlainHeaderLayout } from "layouts/header/HeaderLayout";

export const NoSuchPage = (props: RouteComponentProps) => (
  <PlainHeaderLayout>
    <Spacer spacing={SpacingEnum.extra_large} />
    <div className="container centered">
      <p>
        <code>{props.location.pathname}</code> is an unknown location!
      </p>
    </div>
  </PlainHeaderLayout>
);
