import Token from './Token';

class AppStorage {
    setToken(token) {
        localStorage.setItem('token', token);
    }

    setUser(user) {
        localStorage.setItem('user', user);
    }

    store(token, user) {
        this.setToken(token);
        this.setUser(user);
    }

    storeToken(response) {
        const access_token = response.data.access_token;
        const username = response.data.user;
        if (Token.isValid(access_token)) {
            this.store(access_token, username);
            console.log("Logged in!");
        }
    }

    clear() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    getUser() {
        return localStorage.getItem('user');
    }
}

export default AppStorage = new AppStorage();
