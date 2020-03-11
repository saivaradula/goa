import { authHeader } from '../helpers';

export const userService = {
    //login,
    logout,
    //register
};

function logout() {
    localStorage.removeItem('user');
}

//const logout = () => localStorage.removeItem('user');