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
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    handleLogin = (e) => {
        const { email, password } = this.state;

        e.preventDefault();
        this.props.handleSubmit(email, password);
    }

    render() {
        const { loading } = this.props;
        
        return (
            <Tab.Pane className='auth-form'>
                <Form>
                    <Form.Field>
                        <Input 
                            placeholder='Email' 
                            onChange={e => this.handleChange(e, {name: 'email', value: e.target.value})} />
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder='Password' type='password'
                            onChange={e => this.handleChange(e, { name: 'password', value: e.target.value })} />
                    </Form.Field>
                    <Button.Group vertical>
                        <Button primary loading={loading} disabled={loading}
                            onClick={this.handleLogin}>Login</Button>
                        <Button basic disabled={loading}
                        className='secondary-button'
                        onClick={this.props.toggleTabChange}>
                            Don't have an account? Register here.
                        </Button>
                    </Button.Group>
                </Form>
            </Tab.Pane>
        );
    }
}

export default LoginForm;