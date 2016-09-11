import React, {PropTypes, Component} from "react";

import {Style, StyleElement} from "app/utils/style.js";

import FirstView from "app/components/views/FirstView/index.js";

class Index extends Component {
  render() {
    return (
      <div>
        <FirstView />

        <StyleElement />
      </div>
    );
  }
}

Index.propTypes = {
};

export default Style.component(Index);
