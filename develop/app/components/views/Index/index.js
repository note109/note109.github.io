import React, {PropTypes, Component} from "react";

import {Style, StyleElement} from "app/utils/style.js";

import FirstView from "app/components/views/FirstView/index.js";
import Skills from "app/components/views/Skills/index.js";
import LastView from "app/components/views/LastView/index.js";

class Index extends Component {
  render() {
    return (
      <div>
        <FirstView />
        <Skills />
        <LastView />

        <StyleElement />
      </div>
    );
  }
}

Index.propTypes = {
};

export default Style.component(Index);
