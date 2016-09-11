import {Style} from "app/utils/style.js";
import {isPC} from "app/constants/style.js";
import {flexRow} from "app/utils/mixin.js";

export const TEXT = Style.registerStyle({
  [isPC]: {
    // color: "red",
  },
});

export const FIRST_VIEW = Style.registerStyle({
  ...flexRow,
  justifyContent: "space-around",
  width: "100vw",
});

export const RIGHT = Style.registerStyle({
  alignSelf: "flex-end",
});
