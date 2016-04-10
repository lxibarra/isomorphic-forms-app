import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Venues extends React.Component {

  componentWillMount() {
    this.setState({
      form:{
        name:{},
        email:{}
      }
    })
  }

  setField(objectField) {
    let form = this.state.form;
    form[objectField.name] = objectField;
    this.setState({
      form:form
    });

    console.log(this.state.form);
  }

  render() {
    //Must fnd a way to properly validate form
    // The validation object maybe the desired validation structure
    return (
      <div>
        <Input
          label="Name:"
          name="name"
          required={true}
          validation={{
            required:{
                required:true,
                msg:'This field is mandatory'
            },
            pattern:{
              regex:/\d+/,
              msg:'Pattern not met'
            }}
          }
          placeholder="Enter your name"
          modelSetter={this.setField.bind(this)}
          />
        <Input label="Email:" name="email" placeholder="Enter your email" modelSetter={this.setField.bind(this)} />
        <Button cssClass="success" label="Save"></Button>
        <hr/>
        <label>Current form values</label>
        <p>{this.state.form.name.value}</p>
        <p>{this.state.form.email.value}</p>
      </div>
    )
  }
}

export default Venues;
