let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';window.onload = () => {let userId = window.location.pathname.replace('/ShowOneElement/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = userName]').textContent = response.body.query.userName ;document.querySelector('[annotationname = userEmail]').textContent = response.body.query.userEmail ;}});};