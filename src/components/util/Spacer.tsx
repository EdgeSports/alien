enum SpacingEnum {
  extra_small = 4,
  small = 8,
  medium = 18,
  large = 30,
  extra_large = 50,
}

const Spacer = ({ spacing = SpacingEnum.small }) => (
  <div style={{ lineHeight: 0, height: spacing + "vh" }}></div>
);

export { Spacer, SpacingEnum };
