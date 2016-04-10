import React from 'react';

class Input extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({
      helpBlockCss:'help-block hide',
      groupState:'form-group'
    });
  }

  updateModel(event) {
      let field = { name:event.target.name, value:event.target.value, valid:true };
      //required validation must be moved to a mixin or inheritable class.
      if(this.props.required && event.target.value.trim().length === 0) {
          this.holder.classList.add('has-error');
          field.valid = false;
      } else {
         this.holder.classList.remove('has-error');
      }

      this.props.modelSetter(field);
  }

  render() {
    return (
      <div ref={(ref) => this.holder = ref} className="form-group">
          <label>{this.props.label}
            <input id="input1" onChange={this.updateModel.bind(this)} name={this.props.name} type="text" className="form-control" placeholder={this.props.placeholder} />
          </label>
          <span ref={(ref)=> this.helpBlock = ref } className="help-block hide">Invalid input</span>
      </div>
    )
  }
}

export default Input;
