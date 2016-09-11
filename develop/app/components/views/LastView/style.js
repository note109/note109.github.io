import {Style} from "app/utils/style.js";
import {flexRow, flexColumn, backgroundImage} from "app/utils/mixin.js";

export const FOOTER = Style.registerStyle({
  ...flexColumn,
  justifyContent: "space-between",
  height: "30vh",
});

export const EMAIL = Style.registerStyle({
  textAlign: "right",
});

export const SOCIALS = Style.registerStyle({
  ...flexRow,
  justifyContent: "center",
});

export const ICON_WRAPPER = Style.registerStyle({
  width: "48px",
  height: "48px",
  backgroundColor: "#fff",
  boxShadow: "-1px 1px 1px rgba(0,0,0,0.5)",
  borderRadius: "100%",
  ...flexRow,
  justifyContent: "center",
  alignItems: "center",
  margin: "12px 12px",
});

export const SNS_ICON = Style.registerStyle({
  width: "24px",
  height: "24px",
});
