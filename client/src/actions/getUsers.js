import axios from "axios";





export const getUsers = () => {
    axios.get("api/users/fetchusers")
        .then(response => console.log(response.data))
        // .catch(function (error){console.log(error);})
};


