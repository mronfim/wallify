import React from 'react';
import {
    Tab,
    Dimmer,
} from 'semantic-ui-react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './styles/authentication.css'

class AuthenticationComponent extends React.Component {
    constructor(props) {
        super(props);
        let activeIndex = (props.login && 0) || (props.register && 1) ;
        this.state = {
            activeIndex,
        };
    }

    componentWillMount = () => {
        if (this.props.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

    toggleTabChange = (e) => {
        const { activeIndex } = this.state;

        e.preventDefault();
        this.setState({ activeIndex: (activeIndex + 1) % 2 })
    }

    handleLogin = (email, password) => {
        this.props.getAuthentication({ email, password });
    }

    handleRegister = (email, password, password_confirmation) => {
        this.props.signUp({ email, password, password_confirmation });
    }

    panes = () => {
        const { error } = this.props;
        const login_error = error && (error.status === 401) && error.msg;
        const register_error = error && (error.status === 422) && error.msg;
        
        return [
            { menuItem: 'Login', render: () => {
                return <LoginForm
                        handleSubmit={this.handleLogin}
                        toggleTabChange={this.toggleTabChange}
                        loading={this.props.showSpinner}
                        error={login_error} />
            }},
            { menuItem: 'Register', render: () => {
                return <RegisterForm
                        handleSubmit={this.handleRegister}
                        toggleTabChange={this.toggleTabChange}
                        loading={this.props.showSpinner}
                        error={register_error} />
            }},
        ];
    }

    render() {
        const { showSpinner } = this.props;
        const { activeIndex } = this.state;
        
        return (
            <div className='authentication'>
                <Dimmer.Dimmable className='form-container' dimmed={true}>
                    <Dimmer active={showSpinner} inverted />
                    <Tab panes={this.panes()}
                        menu={{ secondary: true, pointing: true }}
                        activeIndex={activeIndex}
                        onTabChange={this.handleTabChange} />
                </Dimmer.Dimmable>
            </div>
        );
    }
}

export default AuthenticationComponent;