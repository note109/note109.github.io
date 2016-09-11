import {Style} from "app/utils/style.js";
import {flexRow} from "app/utils/mixin.js";

export const ICONS = Style.registerStyle({
  ...flexRow,
  justifyContent: "space-around",
});
