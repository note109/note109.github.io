import {Style} from "app/utils/style.js";
import {isPC} from "app/constants/style.js";
import {flexColumn} from "app/utils/mixin.js";

export const FIRST_VIEW = Style.registerStyle({
  ...flexColumn,
  justifyContent: "space-between",
  width: "100vw",
  height: "100vh",
});

export const NAME = Style.registerStyle({
  marginLeft: "16px",
  marginTop: "16px",
  fontSize: "32px",
  alignSelf: "flex-start",
});

export const COPY = Style.registerStyle({
  textAlign: "right",
  alignSelf: "flex-end",
  fontSize: "64px",
  marginRight: "16px",
  marginBottom: "16px",
});
