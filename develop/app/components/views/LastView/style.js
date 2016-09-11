import {Style} from "app/utils/style.js";
import {flexRow, borderTop, backgroundImage} from "app/utils/mixin.js";

export const FOOTER = Style.registerStyle({
  ...borderTop,
});

export const SNS_ICON = Style.registerStyle({
  width: "24px",
  height: "24px",
});
