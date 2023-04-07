import axios from "axios";


axios.defaults.baseURL = "http://127.0.0.1:5000";


export const getUsers = () => {
    axios.get("api/users/fetchusers")
        // .then(response => console.log(response))
        .then((response) => {
            const allRegistered = response.data
        })
};


