import axios from 'axios';


//const host = "http://ec2-52-221-214-150.ap-southeast-1.compute.amazonaws.com:8082/api/internal"
const host = "https://www.api.adg-internal.com/api/internal"
const TTQT = "/internation-payment";
const HSGN = "/disbursement";

const instance = axios.create({
	baseURL: `${host}`,
	timeout: 5000,
	headers: {
		// authorization: "Bearer " + localStorage.getItem('admin-token')
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

	exportDisbursement: (params) => instance.post(TTQT + HSGN + '/bidv/export', params, {
		responseType: "blob"
	}),

	importDisbursement: (params) => instance.post(TTQT + HSGN + '/bidv/import', params, {
		headers: {
			'Content-Type': 'multipart/form-data',
			"X-Requested-With": "*"
		},
		responseType: "json",
	}),

}

// // API for Cainet Model
// getCabitnet: () => instance.get('/v1/cabinets'),
// updateCabinet: (id, params) => {
// 	console.log('/v1/cabinets/' + id, params);
// 	return instance.post('/v1/cabinets/' + id, params)
// },
// deleteCabinet: (id) => instance.delete('/v1/cabinets/' + id),
// getBoxesInCabinet: (id) => instance.get('/v1/cabinets/' + id + '/boxes'),
// getCabinetById: (id) => instance.get('/v1/cabinets/' + id),

// // API for Cainet Template
// createCabinetTemplate: (params) => instance.post('/v1/cabinet-templates', params),
// getCabitnetTemplate: () => instance.get('/v1/cabinet-templates'),
// getTemplateByCabinetId: (id) => instance.get('/v1/cabinets/' + id + '/template-info'),
// deleteCabinetTemplate: (id) => instance.delete('/v1/cabinet-templates/' + id),


// // API for Box 
// updateBoxStatus: (params) => instance.post('/v1/boxes/status/' + params.status + '?cabinetId=' + params.cabinetId + '&boxNum=' + params.boxNum),


export default adminApi;