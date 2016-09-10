import React, {PropTypes, Component} from "react";

import {Style, StyleElement} from "app/utils/style.js";
import {TEXT} from "./style.js";

class Index extends Component {
  render() {
    return (
      <div>
        <p className={TEXT}>
          hello
        </p>

        <StyleElement />
      </div>
    );
  }
}

Index.propTypes = {
};

export default Style.component(Index);
