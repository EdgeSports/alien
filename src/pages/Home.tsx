import logo from "assets/images/logo/logo-main-white.png";
import hero_img from "assets/images/stock/hero-image.png";
import mission_statement_img from "assets/images/stock/shoulder-press.png";
import kyle_headshot from "assets/images/people/kyle-brauman.jpg";
import pieter_headshot from "assets/images/people/pieter-svenson.jpg";
import thomas_schneider from "assets/images/people/thomas-schneider.jpeg";
import julia_headshot from "assets/images/people/julia-schuler.png";
import jack_headshot from "assets/images/people/jack-henhapl.png";
import { Spacer, SpacingEnum } from "components/util/Spacer";
import { HomeHeaderLayout } from "layouts/header/HeaderLayout";
import { ReactElement } from "react";
import { EDGE_BACKGROUND, EDGE_BLUE } from "util/Constants";
import { SiGithub, SiLinkedin, SiMailDotRu } from "react-icons/si";
import {
  MdArrowForward,
  MdFavorite,
  MdHelp,
  MdKeyboardArrowDown,
  MdPerson,
  MdSchool,
  MdTrendingUp,
} from "react-icons/md";
import { Button } from "components/Buttons";
import { Footer } from "components/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";
import { useEffect } from "react";

const heroCssHeight = "100vh";

const Section = ({
  children,
  title,
  minHeight,
  backgroundColor = "rgba(0, 0, 0, 0)",
}: {
  children: ReactElement;
  title?: string;
  minHeight?: string;
  backgroundColor?: string;
}) => (
  <div className="container" style={{ minHeight: minHeight ? minHeight : "0" }}>
    {title ? (
      <>
        <div className="d-flex justify-content-center">
          <h2
            style={{
              textAlign: "center",
              color: EDGE_BLUE,
              borderBottom: "5px solid var(--edgeBlue)",
              padding: "10px",
              width: "fit-content",
            }}
          >
            {title}
          </h2>
        </div>
        <Spacer spacing={SpacingEnum.small} />
      </>
    ) : (
      <></>
    )}
    {children}
    <Spacer spacing={SpacingEnum.medium} />
  </div>
);

const Benefit = ({
  icon,
  title,
  message,
}: {
  icon: ReactElement;
  title: string;
  message: string;
}) => (
  <div
    className="col-lg-4"
    style={{
      textAlign: "center",
      marginBottom: "20px",
      color: EDGE_BACKGROUND,
    }}
  >
    <ScrollAnimation
      animateIn="animate__zoomIn"
      delay={Math.random() * 500}
      animateOnce={true}
    >
      <h1 style={{ fontSize: "40px", color: EDGE_BACKGROUND }}>{icon}</h1>
      <h3>{title}</h3>
      <p>{message}</p>
    </ScrollAnimation>
  </div>
);

const BenefitSection = ({ children }: { children?: ReactElement }) => {
  let relativeDiv: HTMLDivElement | undefined = undefined;
  const [height, setHeight] = useState(10);

  const updateHeight = () => {
    if (relativeDiv) {
      setHeight(relativeDiv.clientHeight - 20);
    }
  };

  window.addEventListener("resize", updateHeight.bind(this));

  useEffect(() => {
    updateHeight();
  });

  const bladeThicknessIncrement = 200;
  return (
    <Section>
      <>
        <div
          style={{
            position: "absolute",
            backgroundImage:
              "linear-gradient(45deg, var(--edgeRed), #BCA0E4, var(--edgeBlue))",
            left: 0,
            width: "100%",
            height: height + bladeThicknessIncrement,
            transform: `translate(0, -${
              bladeThicknessIncrement / 2
            }px) skewY(-8deg)`,
          }}
        ></div>
        <div
          ref={(element) => {
            if (element !== null) {
              relativeDiv = element;
            }
          }}
          className="row justify-content-center"
        >
          {children}
        </div>
      </>
    </Section>
  );
};

type PersonalLink = {
  icon: ReactElement;
  link: string;
};

const TeamMember = ({
  pic,
  person,
  title,
  links = [],
  zoom = 1,
  offX = 0,
  offY = 0,
}: {
  pic: string;
  person: string;
  title: string;
  links?: Array<PersonalLink>;
  zoom?: number;
  offX?: number;
  offY?: number;
}) => (
  <div className="col-lg-4 col-sm-12">
    <div
      style={{
        overflow: "hidden",
        textAlign: "center",
        marginBottom: "25px",
      }}
    >
      <div
        className="show-on-hover"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "50%",
          height: "250px",
          width: "250px",
          margin: "auto",
          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.4)",
        }}
      >
        <img
          src={pic}
          style={{
            width: `${250 * zoom}px`,
            height: "auto",
            transform: `translate(${offX}px, ${offY}px`,
          }}
          alt=""
        />
        <div
          className="show-on-hover-element"
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
            right: "0",
            height: "50px",
            transition: "ease-in-out 0.3s",
            textAlign: "center",
            background: "rgba(0, 0, 0, 0.85)",
            paddingTop: "5px",
          }}
        >
          {links.map((link, i) => (
            <a href={link.link} key={i} style={{ padding: "5px" }}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 style={{ marginTop: "10px" }}>{person}</h4>
        <span>{title}</span>
      </div>
    </div>
  </div>
);

export const Home = () => (
  <HomeHeaderLayout>
    <div
      style={{
        position: "absolute",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundImage: "url(" + hero_img + ")",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          width: "100vw",
          height: heroCssHeight,
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundSize: "auto auto",
          width: "100vw",
          height: heroCssHeight,
          position: "absolute",
        }}
      ></div>
      <div className="container" style={{ height: heroCssHeight }}>
        <div className="col-12">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: heroCssHeight,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
                <img alt="Logo" src={logo} height="250px" />
              </ScrollAnimation>
              <Spacer />
              <ScrollAnimation
                animateIn="animate__fadeInDown"
                animateOnce={true}
                delay={250}
              >
                <div style={{ textAlign: "center" }}>
                  <h3>REALIZING ATHLETIC POTENTIAL</h3>
                </div>
              </ScrollAnimation>
            </div>
            <p className="bob-up-down" style={{ fontSize: "60px" }}>
              <MdKeyboardArrowDown />
            </p>
          </div>
        </div>
      </div>
      <hr
        style={{
          height: "10px",
          backgroundColor: EDGE_BLUE,
          margin: 0,
        }}
      ></hr>
      <Section>
        <>
          <Spacer />
          <div className="row">
            <div className="col-lg-5 col-sm-12 d-flex p-5">
              <div
                style={{
                  backgroundImage: "url(" + mission_statement_img + ")",
                  height: "500px",
                  width: "100%",
                  overflow: "hidden",
                  backgroundSize: "auto 100%",
                  backgroundPosition: "70% top",
                  border: "10px solid var(--edgeBlue)",
                }}
              ></div>
            </div>
            <div className="col-lg-7 col-sm-12" style={{ paddingLeft: "50px" }}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  animateOnce={true}
                >
                  <p>
                    After years of working in athletic programs at the highest
                    level of performance, we are recognizing the potential to
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  delay={100}
                  animateOnce={true}
                >
                  <h2 style={{ textAlign: "right" }}>set the bar higher.</h2>
                </ScrollAnimation>
                <br />
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  delay={200}
                  animateOnce={true}
                >
                  <p>
                    Our team at Edge Sports Technology has risen to the
                    challenge and is providing innovative solutions for
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  delay={300}
                  animateOnce={true}
                >
                  <h2 style={{ textAlign: "right" }}>
                    advanced athletic development.
                  </h2>
                </ScrollAnimation>
                <br />
                <ScrollAnimation
                  animateIn="animate__fadeInUp"
                  delay={300}
                  animateOnce={true}
                >
                  <div className="d-flex justify-content-center">
                    <a href="mailto:contact@edgesports.tech">
                      <Button
                        label={
                          <span>
                            {"Contact Us "}
                            <MdArrowForward />
                          </span>
                        }
                      />
                    </a>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </>
      </Section>
      <BenefitSection>
        <>
          <Benefit
            icon={<MdSchool />}
            title="Education"
            message="Instantly access credible and practical nutrition information for health and performance optimization"
          />
          <Benefit
            icon={<MdPerson />}
            title="Personalization"
            message="Receive and utilize nutritional recommendations according topersonal preferences and characteristics"
          />
          <Benefit
            icon={<MdTrendingUp />}
            title="Automation"
            message="Utilize a nutrition assistant to decipher exactly what to eat, when to eat, and how much to eat"
          />
          <Benefit
            icon={<MdFavorite />}
            title="Nutrition Management"
            message="Oversee all aspects of your athlete's nutrition through communication, team management, nutrition analytics, and social media integration"
          />
          <Benefit
            icon={<MdHelp />}
            title="Operation Support"
            message="Access in application resources and tools to manage inventory, consulting, and more"
          />
        </>
      </BenefitSection>

      <Section title="MEET THE TEAM">
        <div style={{ margin: "0 auto" }}>
          <div className="row justify-content-center">
            <TeamMember
              pic={kyle_headshot}
              person="Kyle Brauman"
              title="Cofounder / CEO"
              links={[
                {
                  icon: <SiLinkedin />,
                  link: "https://www.linkedin.com/in/kylebrauman/",
                },
                {
                  icon: <SiMailDotRu />,
                  link: "mailto:kyle@edgesports.tech",
                },
              ]}
              zoom={1.3}
              offX={-30}
              offY={-40}
            />
            <TeamMember
              pic={pieter_headshot}
              person="Pieter Svenson"
              title="Cofounder / CTO"
              links={[
                {
                  icon: <MdPerson />,
                  link: "https://pietersvenson.com",
                },
                {
                  icon: <SiLinkedin />,
                  link: "https://www.linkedin.com/in/pietersvenson",
                },
                {
                  icon: <SiGithub />,
                  link: "https://github.com/pietelite",
                },
                {
                  icon: <SiMailDotRu />,
                  link: "mailto:pieter@edgesports.tech",
                },
              ]}
              zoom={1.3}
              offX={-25}
              offY={-50}
            />
            <TeamMember
              pic={thomas_schneider}
              person="Tommy Schneider"
              title="Cofounder / CFO / COO"
              links={[
                {
                  icon: <SiLinkedin />,
                  link: "https://www.linkedin.com/in/thomas-schneider-334121160/",
                },
                {
                  icon: <SiMailDotRu />,
                  link: "mailto:thomas@edgesports.tech",
                },
              ]}
              zoom={1.2}
              offX={-20}
            />
            <TeamMember
              pic={julia_headshot}
              person="Julia Schuler"
              title="Cofounder / CMO"
              links={[
                {
                  icon: <SiLinkedin />,
                  link: "https://www.linkedin.com/in/julia-schuler/",
                },
                {
                  icon: <SiMailDotRu />,
                  link: "mailto:julia@edgesports.tech",
                },
              ]}
              zoom={1.9}
              offX={-110}
              offY={-20}
            />
            <TeamMember
              pic={jack_headshot}
              person="Jack Henhapl"
              title="Developer"
              links={[
                {
                  icon: <MdPerson />,
                  link: "https://henhapl.me",
                },
                {
                  icon: <SiLinkedin />,
                  link: "https://www.linkedin.com/in/jack-henhapl-2b1b78180/",
                },
                {
                  icon: <SiGithub />,
                  link: "https://github.com/jhenhapl",
                },
                {
                  icon: <SiMailDotRu />,
                  link: "mailto:jack@edgesports.tech",
                },
              ]}
              zoom={3}
              offX={-240}
              offY={-20}
            />
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  </HomeHeaderLayout>
);
