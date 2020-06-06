//curl --location --request GET 'https://api.covid19api.com/summary'


function func()
{
    console.log("before api call");
    const url = 'https://api.covid19api.com/summary';
    fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json()) 
    .then(function(data) {
        // Your code for handling the data you get from the API
        // console.log(data.Countries)
        console.log(data.Countries[0])
})
    .catch(function() {
        // This is where you run code if the server returns any errors
    });
}


document.getElementById('update').addEventListener('click',func)