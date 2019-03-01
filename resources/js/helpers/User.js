class User {
    login(data) {
        axios
            .post("/api/auth/login", data)
            .then(resp => console.log(resp.data))
            .catch(err => console.log(err.response.data));
    }
}

export default User = new User;