var t=document.querySelector('.table1')
    console.log("before api call");
    const url = 'https://api.covid19api.com/summary';
    fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json()) 
    .then(function(data) {
        // Your code for handling the data you get from the API
        // console.log(data.Countries)
        for(var i=0;i<data.Countries.length;i++){
            var tr=document.createElement('tr')
            var td1=document.createElement('td')
            var td2=document.createElement('td')
            var td3=document.createElement('td')
            var td4=document.createElement('td')
            td1.textContent=data.Countries[i].Country
            td2.textContent=data.Countries[i].TotalConfirmed-data.Countries[i].TotalDeaths-data.Countries[i].TotalRecovered
            td3.textContent=data.Countries[i].TotalRecovered
            td4.textContent=data.Countries[i].TotalDeaths
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            t.appendChild(tr)
        }
    })()


document.getElementById('update').addEventListener('click',func)