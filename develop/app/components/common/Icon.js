import React, {PropTypes, Component} from "react";

import sprite from "assets/icons/svg/sprite.symbol.svg";

class Icon extends Component {
  render() {
    const {className, id, onClick} = this.props;

    return (
      <svg onClick={onClick} className={`svg-${id}-dims ${className}`}>
        <use className="use" xlinkHref={`${sprite}#${id}`} />
      </svg>
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
