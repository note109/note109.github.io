import React, {PropTypes, Component} from "react";

import Icon from "app/components/common/Icon.js";

import {Style, StyleElement} from "app/utils/style.js";
import {
  FOOTER,
  EMAIL,
  SOCIALS,
  ICON_WRAPPER,
  SNS_ICON,
} from "./style.js";

class LastView extends Component {
  render() {
    return (
      <div>
        <footer className={FOOTER}>
          <email className={EMAIL}>note109@gmail.com</email>
          <div className={SOCIALS}>
            <a className={ICON_WRAPPER} href="https://www.facebook.com/masato.hayakawa.1293">
              <Icon className={SNS_ICON} id="facebook" />
            </a>
            <a className={ICON_WRAPPER} href="https://twitter.com/note109">
              <Icon className={SNS_ICON} id="twitter" />
            </a>
            <a className={ICON_WRAPPER} href="https://github.com/note109">
              <Icon className={SNS_ICON} id="github" />
            </a>
            <a className={ICON_WRAPPER} href="https://github.com/tanishi109">
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
