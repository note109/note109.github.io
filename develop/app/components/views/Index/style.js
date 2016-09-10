import {Style} from "app/utils/style.js";
import {isPC} from "app/constants/style.js";

export const TEXT = Style.registerStyle({
  color: "#efefef",
  [isPC]: {
    color: "red",
  },
});
