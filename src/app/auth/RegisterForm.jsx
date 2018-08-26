import React from 'react';
import {
    Input,
    Button,
    Form,
    Tab,
} from 'semantic-ui-react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_password: '',
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    handleRegister = (e) => {
        const { email, password, confirm_password } = this.state;

        e.preventDefault();

        if (password === confirm_password) {
            this.props.handleSubmit(email, password, confirm_password);
        } else {
            // Handle error
        }
    }

    render() {
        const { loading } = this.props;

        return (
            <Tab.Pane className='auth-form'>
                <Form>
                    <Form.Field>
                        <Input placeholder='Email'
                            onChange={e => this.handleChange(e, { name: 'email', value: e.target.value })} />
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder='Password' type='password'
                            onChange={e => this.handleChange(e, { name: 'password', value: e.target.value })}/>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder='Confirm Password' type='password'
                            onChange={e => this.handleChange(e, { name: 'confirm_password', value: e.target.value })}/>
                    </Form.Field>
                    <Button.Group vertical>
                        <Button primary loading={loading} disabled={loading}
                            onClick={this.handleRegister}>Register</Button>
                        <Button basic
                            className='secondary-button'
                            onClick={this.props.toggleTabChange}>
                            Already have an account? Login here.
                        </Button>
                    </Button.Group>
                </Form>
            </Tab.Pane>
        );
    }
}

export default LoginForm;