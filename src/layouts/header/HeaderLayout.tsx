import { Button } from "components/Buttons";
import { LayoutType } from "layouts";
import { Header } from "./Header";
import { PerEnvironment } from "components/util/PerEnvironment";
import { Environment } from "util/Environment";
import { Footer } from "components/Footer";

const PlainHeaderLayout = ({ children }: LayoutType) => (
  <>
    <Header />
    <div style={{ minHeight: "100vh" }}>
      {children}
      <Footer />
    </div>
  </>
);

const HomeHeaderLayout = ({ children }: LayoutType) => (
  <>
    <Header>
      {/* no path on the Item component because the button handles it */}
      <PerEnvironment environments={[Environment.DEVELOPMENT]}>
        <Header.Item
          element={
            <span>
              (Development){" "}
              <a
                href="http://localhost:8000/admin"
                target="_blank"
                rel="noreferrer"
              >
                Admin Site
              </a>
            </span>
          }
        />
      </PerEnvironment>
      <PerEnvironment environments={[Environment.TEST]}>
        <Header.Item
          element={
            <span>
              (Test){" "}
              <a
                href="http://edge-sports-api-test.azurewebsites.net/admin"
                target="_blank"
                rel="noreferrer"
              >
                Admin Site
              </a>
            </span>
          }
        />
      </PerEnvironment>
      <Header.Item element={<Button path="/dashboard" label="Edge App" />} />
    </Header>
    <div style={{ minHeight: "100vh" }}>
      {children}
      <Footer />
    </div>
  </>
);

export { PlainHeaderLayout, HomeHeaderLayout };
