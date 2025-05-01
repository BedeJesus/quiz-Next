import axios from "axios";

//comunicate with backend api
export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,

})

