import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    receiveAuthentication: ['data'],
    requestAuthentication: null,
    authenticationError: ['error'],
    requestCurrentUser: null,
    receiveCurrentUser: ['data'],
    logOut: null,
})

export { Creators, Types };