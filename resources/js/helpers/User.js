import Token from './Token';
import AppStorage from "./AppStorage";

class User {
    login(data) {
        axios
            .post("/api/auth/login", data)
            .then(resp => {
                this.storeToken(resp);
            })
            .catch(err => {
                console.log("error", err.response.data);
            });
    }

    storeToken(response) {
        const access_token = response.data.access_token;
        const username = response.data.user;

        if (Token.isValid(access_token)) {
            AppStorage.store(access_token, username);
            console.log("Logged in!");
        }
    }
}

export default User = new User;
