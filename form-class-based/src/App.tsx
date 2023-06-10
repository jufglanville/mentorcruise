import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { Input as InputClass } from './utilities/inputs';
import { InputType } from './types';

interface State {
  formSubmitted: boolean;
  inputs: InputType[];
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      formSubmitted: false,
      inputs: [
        new InputClass('text', 'First Name'),
        new InputClass('text', 'Last Name'),
        new InputClass('email', 'Email Address'),
        new InputClass('password', 'Password'),
      ],
    };
  }

  handleChange = (id: string, value: string) => {
    const inputs = this.state.inputs.map((input: InputType) => {
      if (input.id === id) {
        input.value = value;
        input.isValid = input.validation.valid(value);
      }
      return input;
    });

    this.setState({ inputs });
  };

  handleSubmit = () => {
    this.setState({ formSubmitted: true });
    // Hanlde form submission
  };

  render() {
    return (
      <div>
        <Button active={true} onClick={this.handleSubmit}>
          Claim your free trial
        </Button>

        {this.state.inputs.map((input: InputType) => (
          <Input
            key={input.id}
            formSubmitted={this.state.formSubmitted}
            onChange={(id, value) => this.handleChange(id, value)}
            {...input}
          />
        ))}
      </div>
    );
  }
}

export default App;
