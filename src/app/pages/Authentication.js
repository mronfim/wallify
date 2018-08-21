import React from 'react';
import {
    Input,
    Button,
    Form,
} from 'semantic-ui-react';

import './styles/authentication.css'

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm: '',
        }
    }

    handleChange = (e, {name, value}) => this.setState({ [name]: value });

    handleLogin() {
        const { name, email } = this.state;
    }

    render() {
        return (
            <div className='form-container'>
                <Form>
                    <Form.Field>
                        <Input placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder='Password' type='password' />
                    </Form.Field>
                    <Button.Group fluid>
                        <Button primary>Login</Button>
                        <Button.Or />
                        <Button>Register</Button>
                    </Button.Group>
                </Form>
            </div>
        );
    }
}

export default Authentication;