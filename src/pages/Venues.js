import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Venues extends React.Component {

  componentWillMount() {
    this.setState({
      form:{

      }
    })
  }

  render() {
    //Must fnd a way to properly validate form
    return (
      <div>

        <Input label="Name:" placeholder="Enter your name" model={this.state.form} />
        <Input label="Email:" placeholder="Enter your email" model={this.state.form}/>
        <Button cssClass="success" label="Save"></Button>
        <hr/>
        <label>Current form values</label>
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
      </div>
    )
  }
}

export default Venues;
