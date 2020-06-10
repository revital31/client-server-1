
const serverApiPath ="http://localhost:3000/events";
const eventWrapperEl =document.getElementById('events-list');
 


const getEventsList = async (path) => {
    const response = await fetch(path,{
        //cors
        
        method:'GET',
        mode: 'no-cors'
        
    });
    return await response.json();
}


const renderEventsRow = (event) => {

    const li = document.createElement('li');
    li.innerText = event;

    return li;
}


const renderEventsList =(list,parent) => {
    for (let  i=0; i <list.length; i++) {
        parent.appendChild(renderEventsRow(list[i]));
    }


    const render= async(path,el) => {
        const events =await getEventsList (path);
        renderEventsList(events,el);
    }

    render(serverApiPath,eventWrapperEl);









}