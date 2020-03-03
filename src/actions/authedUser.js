export const SET_AUTHED_USER = 'SET_AUTHED-USER'

export function setAuthUser(id) {
    return {
        type: SET_AUTH_USER,
        id
    };
}