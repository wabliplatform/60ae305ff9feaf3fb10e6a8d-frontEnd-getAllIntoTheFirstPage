let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';window.onload = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("iohe").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const htmlElement = subDataElements[i].querySelector("[annotationname = 'userName']");
        if(htmlElement !== null){
          htmlElement.textContent = data[data.length -i -1].userName;
        }
       } catch (e) { console.log(e) };try { 
        const htmlElement = subDataElements[i].querySelector("[annotationname = 'userEmail']");
        if(htmlElement !== null){
          htmlElement.textContent = data[data.length -i -1].userEmail;
        }
       } catch (e) { console.log(e) };
        subDataElements[i].addEventListener('click',() => {{ location.href= '/ShowOneElement/'+data[data.length -i -1]._id+'';}} )
      }
    });
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].remove()})}});};