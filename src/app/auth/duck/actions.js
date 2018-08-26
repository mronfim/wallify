import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    receiveAuthentication: ['user'],
    requestAuthentication: null,
    logOut: null,
})

export { Creators, Types };