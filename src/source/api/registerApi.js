import axios from "axios"
import {ACCESS_TOKEN} from "./strings";

const axiosInstance = axios.create({
    baseURL: window.Laravel.base_url,
    timeout: 8000,
    headers: {'X-CSRF-TOKEN': window.Laravel.csrfToken, 'X-Requested-With': 'XMLHttpRequest'}
});

export const sendSMS = (phone_number) => {
    axios.post('api/send-sms', { phone: phone_number })
    .then(res => {
        console.log('Success');
    })
    .catch(function(error) {
        console.log('Error');
    });
}

