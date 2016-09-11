import React, {PropTypes, Component} from "react";

import Icon from "app/components/common/Icon.js";

import {Style, StyleElement} from "app/utils/style.js";
import {
  FOOTER,
  SNS_ICON,
} from "./style.js";

class LastView extends Component {
  render() {
    return (
      <div>
        <footer className={FOOTER}>
          <email>note109@gmail.com</email>
          <div>
            <a href="https://www.facebook.com/masato.hayakawa.1293">
              <Icon className={SNS_ICON} id="facebook" />
            </a>
            <a href="https://twitter.com/note109">
              <Icon className={SNS_ICON} id="twitter" />
            </a>
            <a href="https://github.com/note109">
              <Icon className={SNS_ICON} id="github" />
            </a>
            <a href="https://github.com/tanishi109">
              <Icon className={SNS_ICON} id="github" />
            </a>
          </div>

        </footer>

        <StyleElement />
      </div>
    );
  }
}

LastView.propTypes = {
};

export default Style.component(LastView);
