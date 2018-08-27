import React, { Component } from 'react';

import './styles/home.css';

class HomeComponent extends Component {
    componentWillMount = () => {
        if (!this.props.user && this.props.token) {
            this.props.getCurrentUser(this.props.token);
        }
    }

    render() {
        return (
            <div className="home">
                Welcome {(this.props.user && this.props.user.email) || ''}
            </div>
        );
    }
}

export default HomeComponent;
