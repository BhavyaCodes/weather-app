$("#main_form").on("submit", (e) => {
  const APIKEY = "7e5001f7a8111bf0f41d9a6cfa938443";
  const cityInput = $("#inputCity").val();

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${APIKEY}&units=metric`;

  // SEND REQUEST
  const request = new XMLHttpRequest();

  request.addEventListener("load", function () {
    const dataRetrieved = JSON.parse(this.responseText);
    console.log(dataRetrieved);

    const retrieveData = {
      getCity() {
        return dataRetrieved.name;
      },
      getCountry() {
        return dataRetrieved.sys.country;
      },
      getForecast() {
        return dataRetrieved.main.temp;
      },
      getClouds() {
        return dataRetrieved.weather[0].description;
      },
    };

    const list = document.createElement("li");

    const markup = `
    <div class="card" style="width: 18rem; display: inline-block">
      <div class="card-body">
        <h5 class="card-title">${retrieveData.getCity()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${retrieveData.getCountry()}</h6>
        <p class="card-text">Forecast: ${retrieveData.getForecast()}°c</p>
        <p class="card-text">Clouds: ${retrieveData.getClouds()}</p>
      </div>
    </div>
    `;

    $(list).html(markup);
    $("ul").append(list);

    //   const weather = forecast.weather;
    //   for(let item of weather){
    //     console.log(item.description);
    //   }
    // }
  });
  request.addEventListener("error", function () {
    console.log("Error!");
  });

  request.open("GET", url);
  request.send();
  // /#SEND REQUEST

  e.preventDefault();
});
