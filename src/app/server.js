import axios from "axios";

// export const Base_URL = "http://localhost:3000/";
export const Base_URL = "http://10.3.20.172:3000/";      //Development & testing

const token = localStorage.getItem('jwtToken');
axios.defaults.headers.common['Authorization'] = token;
axios.defaults.headers.common['Content-Type'] =
    'application/x-www-form-urlencoded';
