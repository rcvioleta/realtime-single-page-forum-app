import Token from './Token';

class User {
    login(data) {
        axios
            .post("/api/auth/login", data)
            .then(resp => {
                Token.isValid(resp.data.access_token);
            })
            .catch(err => console.log(err.response.data));
    }
}

export default User = new User;