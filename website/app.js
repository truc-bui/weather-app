/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '16e28803235e60780d6d86b64a81e861&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();


//click the button event
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', performAction);

function performAction(e) {
  const zipCode = document.getElementById('zip').value;
  const content = document.getElementById('feelings').value;
  //get the data
  getWeatherData(baseURL, zipCode, apiKey)
    .then(function (data) {
      // Add data to POST request
      postData('/add', {
          temp: data.main.temp,
          date: newDate,
          content: content
        })
        // Function which updates UI
        .then(function () {
          updateUI()
        })
    })
};


// Async GET
const getWeatherData = async function (baseURL, zipCode, apiKey) {
  const response = await fetch(baseURL + zipCode + ',us' + '&appid=' + apiKey)
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('error', error);
  }
};
// Async POST
const postData = async function (url = '', data = {}) {
  const postRequest = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await postRequest.json();
    return newData;
  } catch (error) {
    console.log('Error', error);
  }
};

//Update UI
const updateUI = async function () {
  const request = await fetch('/all');
  try {
    // Transform into JSON
    const allData = await request.json();
    console.log(allData);
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.content;
    document.getElementById('date').innerHTML = allData.date;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};