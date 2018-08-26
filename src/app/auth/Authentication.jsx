import React from 'react';
import {
    Tab,
    Loader,
    Dimmer,
    Segment,
} from 'semantic-ui-react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './styles/authentication.css'

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
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

    panes = () => [
        { menuItem: 'Login', render: () => <LoginForm handleSubmit={this.handleLogin}
            toggleTabChange={this.toggleTabChange} loading={this.props.showSpinner} /> },
        { menuItem: 'Register', render: () => <RegisterForm handleSubmit={this.handleRegister}
            toggleTabChange={this.toggleTabChange} loading={this.props.showSpinner} /> },
    ]

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

export default Authentication;