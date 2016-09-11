import React, {PropTypes, Component} from "react";

import {Style, StyleElement} from "app/utils/style.js";
import {
  TEXT,
  FIRST_VIEW,
  RIGHT,
} from "./style.js";

class FirstView extends Component {
  render() {
    return (
      <div>
        <div className={FIRST_VIEW}>
          <div>
            <h1 className={TEXT}>Enchant</h1>
            <h1 className={TEXT}>Your</h1>
            <h1 className={TEXT}>World</h1>
          </div>
          <div className={RIGHT}>
            <p>note109</p>
          </div>
        </div>

        <StyleElement />
      </div>
    );
  }
}

FirstView.propTypes = {
};

export default Style.component(FirstView);
