var thermostat;

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
      })
    }
});
