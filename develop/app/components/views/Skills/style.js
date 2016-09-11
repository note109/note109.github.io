import {Style} from "app/utils/style.js";
import {flexRow, flexColumn} from "app/utils/mixin.js";

export const SKILLS = Style.registerStyle({
  ...flexColumn,
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  boxShadow: "0 30px 40px -30px rgba(0,0,0,0.5)",
  marginBottom: "40px",
});

export const ICONS = Style.registerStyle({
  ...flexRow,
  justifyContent: "space-around",
});
