export const SET_AUTHED_USER = 'SET_AUTHED-USER'

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    };
}