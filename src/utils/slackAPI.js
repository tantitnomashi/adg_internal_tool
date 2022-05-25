import axios from 'axios';


const slackHost = "https://slack.com/api"
const fileUpload = "/files.upload";


const token = "xoxp-3148019471591-3162611109234-3577769184115-b88182e9624b6be58ce2270ad9cf11cd";
const instance = axios.create({
    baseURL: `${slackHost}`,
    timeout: 5000,
    headers: {
        authorization: "Bearer " + token
    }

});

const slackAPI = {
    instance,
    notify: (message, type) => {
        window.$.notify({
            // options
            message
        }, {
            // settings	
            type,
            delay: 3000,
        });
    },
    login: (params) => instance.post('/login', params),
    uploadFile: (params) => instance.post(slackHost + fileUpload, params, {
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data',
            'X-Requested-With': "*",
            'authorization': "Bearer " + token
        },
        responseType: "json",
    }),

}


export default slackAPI;