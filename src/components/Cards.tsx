import { ReactElement } from "react";
import { EDGE_BLUE } from "util/Constants";

const cardStyle = {
  borderRadius: "10px",
  boxShadow: "0 0 8px 5px #101010",
  padding: "10px 20px",
  margin: 20,
};

const cardCaptionStyle = {
  margin: "10px auto",
};

const listCardItemStyle = {
  fontSize: "20px",
  padding: "20px 0 20px 0",
};

const Card = ({
  background = EDGE_BLUE,
  color = "inherit",
  children,
  style = {},
}: {
  background?: string;
  color?: string;
  children?: ReactElement;
  style?: React.CSSProperties;
}) => (
  <div style={{ background: background, color: color, ...cardStyle, ...style }}>
    {children}
  </div>
);

const ListCard = ({
  title,
  items,
  background = EDGE_BLUE,
  color = "inherit",
  jagged = false,
}: {
  title: string;
  items: Array<string>;
  background?: string;
  color?: string;
  jagged?: boolean;
}) => (
  <>
    <div style={{ textAlign: "center" }}>
      <h4 style={cardCaptionStyle}>{title}</h4>
    </div>
    <div style={{ background: background, ...cardStyle }}>
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 0 }}>
        {items.map((item: string, i) => (
          <span
            key={i}
            style={{
              color: color,
              textAlign: jagged ? (i % 2 === 0 ? "left" : "right") : "left",
              ...listCardItemStyle,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </>
);

const CardList = ({
  title,
  items,
  background = EDGE_BLUE,
  color = "inherit",
}: {
  title: string;
  items: Array<string>;
  background?: string;
  color?: string;
}) => (
  <>
    <div style={{ textAlign: "center" }}>
      <h4 style={cardCaptionStyle}>{title}</h4>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {items.map((item: string, i) => (
        <Card
          background={background}
          color={color}
          style={{
            width: "fit-content",
            maxWidth: "100%",
          }}
        >
          <span key={i} style={{ width: "fit-content", margin: "0 20px" }}>
            {item}
          </span>
        </Card>
      ))}
    </div>
  </>
);

const PictureCard = ({
  background = "var(--primaryColor",
  src,
  caption,
}: {
  background?: string;
  src: string;
  caption: string;
}) => {
  return (
    <Card background={background}>
      <>
        <img
          src={src}
          alt={caption}
          width="100%"
          style={{ borderRadius: "5px" }}
        />
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <span>{caption}</span>
        </div>
      </>
    </Card>
  );
};

const OutlineCard = ({
  outlineColor = "gray",
  children,
}: {
  outlineColor?: string;
  children: ReactElement;
}) => (
  <div
    style={{
      border: "5px solid " + outlineColor,
      borderRadius: "5px",
      width: "fit-content",
      padding: "10px",
    }}
  >
    {children}
  </div>
);

export { Card, ListCard, CardList, OutlineCard, PictureCard };
