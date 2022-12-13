import axios from "axios";





export const getUsers = () => {
    axios.get("api/users/fetchusers")
        // .then(response => console.log(response))
        .then((response) => {
            const allRegistered = response.data
        })
};


