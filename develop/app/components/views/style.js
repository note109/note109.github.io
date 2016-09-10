import {Style} from "app/utils/style.js";

Style.registerRule("body", {
  margin: 0,
  padding: 0,
});

Style.registerRule("*", {
  fontFamily: "AvenirNext, HiraginoSans-W3",
  color: "#575757",
});

Style.registerRule("a", {
  cursor: "pointer",
  textDecoration: "none",
});
