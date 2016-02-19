var thermostat;
var photo;
var photo_url;
var photoPlaceId;

$( document ).ready(function() {
    thermostat = new Thermostat();
    var city;
    updateTemperature();

    $('#temperature-up').click(function() {
      thermostat.up();
      updateTemperature();
    });

    $('#temperature-down').click(function() {
      thermostat.down();
      updateTemperature();
    });

    $('#temperature-reset').click(function() {
      thermostat.resetTemperature();
      updateTemperature();
    });

    $('#powersaving-switch').click(function() {
      thermostat.switchPowerSaving();
      $('#powersaving-status').text(thermostat.isInPowerSavingMode() ? "on" : "off");
      $('#powersaving-switch').text(!thermostat.isInPowerSavingMode() ? "on" : "off");
    });

    $('#select-city').submit(function () {
      event.preventDefault();
      city = $('#current-city').val();
      displayWeather();
      // makeImageUrl();
    });

    function updateTemperature() {
      $('#temperature').text(thermostat.getCurrentTemperature() + ' \u2103');
      $('#temperature').attr('class', thermostat.energyUsage());
    }

    function displayWeather() {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var token = '&appid=01f338575399a50d22ec5f76e47f4f1a';
      var units = '&units=metric';
      $.get(url + token + units, function (data) {
        $("#city-temperature").text(data.main.temp + ' \u2103');
        placeId();
      });
    }

    function placeId(){
      $.get('https://api.flickr.com/services/rest/?method=flickr.places.find&api_key=c0c0642a021b784927bf472c63c45083&query=' + city + '&format=json&nojsoncallback=1', function(place_id){
        photoPlaceId = (place_id.places.place[0].place_id);
        displayCityImage();
      });
    }

    function displayCityImage() {
      var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5a846d7adcc737d6165c7ff3ebf70ed5&tags=skyline&sort=interestingness-desc&place_id=' + photoPlaceId + '&format=json&nojsoncallback=1';
      $.get(url, function (photo_data){
      photo = (photo_data.photos.photo[0]);
      makeImageUrl();
      });
    }

    function makeImageUrl() {
    photo_url = 'https://farm' + (photo.farm) + '.staticflickr.com/' + (photo.server) + '/' + (photo.id) + '_' + (photo.secret) + '.jpg';
    $('body').css('background-image', ("url(" + photo_url) + ")");
    console.log(photo_url);
    }


});
