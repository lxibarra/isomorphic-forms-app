import React from 'react';

class Button extends React.Component {
  render() {
    let cssClasses = {
      'success':'btn btn-success',
      'danger': 'btn btn-danger'
    }
    return <button className={cssClasses[this.props.cssClass]} onClick={this.props.click}>{this.props.label}</button>
  }
}

export default Button;
