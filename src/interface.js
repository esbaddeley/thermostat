var thermostat;

$( document ).ready(function() {

    thermostat = new Thermostat();
    var city;
    updateTemperature();

    $('#temperature-up').click(function() {
      thermostat.upButton();
      updateTemperature();
    });

    $('#temperature-down').click(function() {
      thermostat.downButton();
      updateTemperature();
    });

    $('#temperature-reset').click(function() {
      thermostat.resetTemp();
      updateTemperature();
    });

    $('#powersaving-on-off').click(function() {
      thermostat.switchPowerSaving();
      $('#power-saving-status').text(thermostat.power ? "on" : "off");
    });

    $('#select-city').submit(function () {
      event.preventDefault();
      city = $('#current-city').val();
      updateCity();
    });

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature + ' \u2103');
      $('body').attr('class', thermostat.energyUsage());
    }

    function updateCity() {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var token = '&appid=01f338575399a50d22ec5f76e47f4f1a';
      var units = '&units=metric';
      $.get(url + token + units, function (data) {
        $("#city-temperature").text(data.main.temp + ' \u2103');
      })
    }
});
