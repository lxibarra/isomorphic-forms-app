import React from 'react';

class Input extends React.Component {

  updateModel(event) {
      console.log(event.target.value);
      this.props.model.setState({
          [this.props.name]:event.target.value
      });
  }

  render() {
    return (
      <div className="form-group">
          <label htmlFor="input1">{this.props.label}</label>
          <input id="input1" onChange={this.updateModel.bind(this)} name={this.props.name} type="text" className="form-control" placeholder={this.props.placeholder} />
      </div>
    )
  }
}

export default Input;
