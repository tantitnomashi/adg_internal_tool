import axios from 'axios';


const host = "https://api.adg-internal.com"
const TTQT = "/international-payment";
const HSGN = "/disbursement";

const instance = axios.create({
	baseURL: `${host}`,
	timeout: 150000,
	headers: {

	}


});

const adminApi = {
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
	logout: () => instance.get('/logout'),

	exportDisbursement: (params) => instance.post(TTQT + HSGN + '/' + params.data.bank + '/export', params, {
		responseType: "blob"
	}),

	importDisbursement: (params, formData) => instance.post(TTQT + HSGN + '/' + params.bank + '/import', formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
			"X-Requested-With": "*"
		},
		responseType: "json",


	}),

	sendMessage: (message) => axios.post(
		`https://api.telegram.org/bot6194886573:AAGe4XRWWgz2MsmjlRNxpzIiHalvrHDxRTU/sendMessage`,
		{
			chat_id: '1214944546',
			text: message
		})



}

export default adminApi;