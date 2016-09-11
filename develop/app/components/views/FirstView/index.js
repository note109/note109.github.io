import React, {PropTypes, Component} from "react";

import {Style, StyleElement} from "app/utils/style.js";
import {
  COPY,
  FIRST_VIEW,
  NAME,
} from "./style.js";

class FirstView extends Component {
  render() {
    return (
      <div>
        <div className={FIRST_VIEW}>
          <div className={NAME}>
            <p>note109</p>
          </div>
          <h1 className={COPY}>
            Enchant<br />
            Your<br />
            World
          </h1>
        </div>

        <StyleElement />
      </div>
    );
  }
}

FirstView.propTypes = {
};

export default Style.component(FirstView);
