// ================================
//            lat & lon
// ================================
let lat = 40.730610;
let lon = -73.935242;

function newPlaceByCity() {
    const city = document.getElementById("city").value;


    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=d139cbc7866c17125cd3fab45ca9d111`)
        .then((responseCity) => responseCity.json())
        .then((dataCity) => {
            console.log(dataCity);
            let latCity = dataCity[0].lat;
            let lonCity = dataCity[0].lon;

            console.log(latCity);
            console.log(lonCity);


            // ================================
            //          Fetch
            // ================================
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latCity}&lon=${lonCity}&units=metric&appid=d139cbc7866c17125cd3fab45ca9d111`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);

                    // Location
                    // ===============================
                    document.getElementById("currentPlaceOutput").innerHTML = data.name + ", " + data.sys.country;

                    // Image
                    // ===============================
                    document.getElementById("picOfWeather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

                    // Degree
                    // ===============================
                    document.getElementById("degreeOutput").innerHTML = data.main.temp + " °C";

                    // Clouds
                    // ===============================
                    document.getElementById("cloudsOutput").innerHTML = data.weather[0].description;

                    // Date of data
                    // ===============================
                    document.getElementById("dateOutput").innerHTML = "Obtained at " + new Date(data.dt * 1000).toLocaleString();

                    // Current time
                    // ===============================
                    // let time = (Math.floor((new Date().getTime())) / 1000) - data.timezone;
                    // console.log(time);


                    // document.getElementById("localTimeOutput").innerHTML = new Date(time).toLocaleTimeString();

                    function getTime(dt, timezone) {
                        const utc_seconds = parseInt(dt, 10) + parseInt(timezone, 10);
                        const utc_milliseconds = utc_seconds * 1000;
                        const local_date = new Date(utc_milliseconds).toUTCString();
                        return local_date;
                    }

                    let dt = data.dt;
                    let timezone = data.timezone;

                    console.log(new Date(getTime(dt, timezone)).toLocaleTimeString());



                    // Wind
                    // ===============================
                    document.getElementById("windOutput").innerHTML = data.wind.speed + " m/s , " + data.wind.deg + " deg";

                    // Cloudiness
                    // ===============================
                    document.getElementById("cloudinessOutput").innerHTML = data.weather[0].description;

                    // Pressure
                    // ===============================
                    document.getElementById("pressureOutput").innerHTML = data.main.pressure + " hpa";

                    // Humidity
                    // ===============================
                    document.getElementById("humidityOutput").innerHTML = data.main.humidity + " %";

                    // Sunrise
                    // ===============================
                    document.getElementById("sunriseOutput").innerHTML = new Date((data.sys.sunrise) * 1000 - data.timezone).toLocaleTimeString();

                    // Sunset
                    // ===============================
                    document.getElementById("sunsetOutput").innerHTML = new Date((data.sys.sunset) * 1000 - data.timezone).toLocaleTimeString();

                    // Geo coords
                    // ===============================
                    document.getElementById("coordsOutput").innerHTML = "[" + data.coord.lat.toFixed(2) + ", " + data.coord.lon.toFixed(2) + "]";
                    document.getElementById("coordsOutput").style.color = "red";
                })
        })

}

function newPlace() {
    lat = document.getElementById("lat").value;
    lon = document.getElementById("lon").value;



    // ================================
    //          Fetch
    // ================================
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d139cbc7866c17125cd3fab45ca9d111`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            // Location
            // ===============================
            document.getElementById("currentPlaceOutput").innerHTML = data.name + ", " + data.sys.country;

            // Image
            // ===============================
            document.getElementById("picOfWeather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

            // Degree
            // ===============================
            document.getElementById("degreeOutput").innerHTML = data.main.temp + " °C";

            // Clouds
            // ===============================
            document.getElementById("cloudsOutput").innerHTML = data.weather[0].description;

            // Date of data
            // ===============================
            document.getElementById("dateOutput").innerHTML = "Obtained at " + new Date(data.dt * 1000).toLocaleString();

            // Current time
            // ===============================
            // let time = (Math.floor((new Date().getTime())) / 1000) - data.timezone;
            // console.log(time);


            // document.getElementById("localTimeOutput").innerHTML = new Date(time).toLocaleTimeString();

            function getTime(dt, timezone) {
                const utc_seconds = parseInt(dt, 10) + parseInt(timezone, 10);
                const utc_milliseconds = utc_seconds * 1000;
                const local_date = new Date(utc_milliseconds).toUTCString();
                return local_date;
            }

            let dt = data.dt;
            let timezone = data.timezone;

            console.log(new Date(getTime(dt, timezone)).toLocaleTimeString());



            // Wind
            // ===============================
            document.getElementById("windOutput").innerHTML = data.wind.speed + " m/s , " + data.wind.deg + " deg";

            // Cloudiness
            // ===============================
            document.getElementById("cloudinessOutput").innerHTML = data.weather[0].description;

            // Pressure
            // ===============================
            document.getElementById("pressureOutput").innerHTML = data.main.pressure + " hpa";

            // Humidity
            // ===============================
            document.getElementById("humidityOutput").innerHTML = data.main.humidity + " %";

            // Sunrise
            // ===============================
            document.getElementById("sunriseOutput").innerHTML = new Date((data.sys.sunrise) * 1000 - data.timezone).toLocaleTimeString();

            // Sunset
            // ===============================
            document.getElementById("sunsetOutput").innerHTML = new Date((data.sys.sunset) * 1000 - data.timezone).toLocaleTimeString();

            // Geo coords
            // ===============================
            document.getElementById("coordsOutput").innerHTML = "[" + data.coord.lat.toFixed(2) + ", " + data.coord.lon.toFixed(2) + "]";
            document.getElementById("coordsOutput").style.color = "red";
        })

};


// ================================
//          Fetch
// ================================
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d139cbc7866c17125cd3fab45ca9d111`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        // Location
        // ===============================
        document.getElementById("currentPlaceOutput").innerHTML = data.name + ", " + data.sys.country;

        // Image
        // ===============================
        document.getElementById("picOfWeather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        // Degree
        // ===============================
        document.getElementById("degreeOutput").innerHTML = data.main.temp + " °C";

        // Clouds
        // ===============================
        document.getElementById("cloudsOutput").innerHTML = data.weather[0].description;

        // Date of data
        // ===============================
        document.getElementById("dateOutput").innerHTML = "Obtained at " + new Date(data.dt * 1000).toLocaleString();

        // Current time
        // ===============================
        // let time = (Math.floor((new Date().getTime())) / 1000) - data.timezone;
        // console.log(time);


        // document.getElementById("localTimeOutput").innerHTML = new Date(time).toLocaleTimeString();

        function getTime(dt, timezone) {
            const utc_seconds = parseInt(dt, 10) + parseInt(timezone, 10);
            const utc_milliseconds = utc_seconds * 1000;
            const local_date = new Date(utc_milliseconds).toUTCString();
            return local_date;
        }

        let dt = data.dt;
        let timezone = data.timezone;

        console.log(new Date(getTime(dt, timezone)).toLocaleTimeString());



        // Wind
        // ===============================
        document.getElementById("windOutput").innerHTML = data.wind.speed + " m/s , " + data.wind.deg + " deg";

        // Cloudiness
        // ===============================
        document.getElementById("cloudinessOutput").innerHTML = data.weather[0].description;

        // Pressure
        // ===============================
        document.getElementById("pressureOutput").innerHTML = data.main.pressure + " hpa";

        // Humidity
        // ===============================
        document.getElementById("humidityOutput").innerHTML = data.main.humidity + " %";

        // Sunrise
        // ===============================
        document.getElementById("sunriseOutput").innerHTML = new Date((data.sys.sunrise) * 1000 - data.timezone).toLocaleTimeString();

        // Sunset
        // ===============================
        document.getElementById("sunsetOutput").innerHTML = new Date((data.sys.sunset) * 1000 - data.timezone).toLocaleTimeString();

        // Geo coords
        // ===============================
        document.getElementById("coordsOutput").innerHTML = "[" + data.coord.lat.toFixed(2) + ", " + data.coord.lon.toFixed(2) + "]";
        document.getElementById("coordsOutput").style.color = "red";
    })
