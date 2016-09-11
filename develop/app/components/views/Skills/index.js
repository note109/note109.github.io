import React, {PropTypes, Component} from "react";

import Icon from "app/components/common/Icon.js";

import {Style, StyleElement} from "app/utils/style.js";
import {
  SKILLS,
  ICONS,
} from "./style.js";

class Skills extends Component {
  render() {
    return (
      <div>
        <div className={SKILLS}>
          <div className={ICONS}>
            <Icon id="html5" />
            <Icon id="css3" />
            <Icon id="javascript" />
          </div>
          <div className={ICONS}>
            <Icon id="nodejs" />
            <Icon id="rails" />
            <Icon id="phoenix" />
          </div>
        </div>

        <StyleElement />
      </div>
    );
  }
}

Skills.propTypes = {
};

export default Style.component(Skills);
