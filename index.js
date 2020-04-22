$("#main_form").on("submit", (e) => {
  const APIKEY = "7e5001f7a8111bf0f41d9a6cfa938443";
  const cityInput = $("#inputCity").val();

  const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityInput}&APPID=${APIKEY}&units=metric`;

  // SEND REQUEST
  const request = new XMLHttpRequest();

  request.addEventListener("load", function(){
    console.log("It worked!");

    const dataRetrieved = JSON.parse(this.responseText);
    console.log(dataRetrieved);
    $('#cityID').text(dataRetrieved.city.id);
    $('#cityName').text(dataRetrieved.city.name);
    $('#country').text(dataRetrieved.city.country);
  });
  request.addEventListener("error", function(){
    console.log("Error!");
  });

  request.open("GET", url);
  request.send();
  // /#SEND REQUEST

  e.preventDefault();
});
