import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom';

import AppComponent from './AppComponent';

const mapStateToProps = (state) => {
    return {
        ...state.auth,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    logOut: () => dispatch({ type: 'LOG_OUT' }),
    linkTo: (link) => push(link)
}, dispatch)

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default withRouter(App);