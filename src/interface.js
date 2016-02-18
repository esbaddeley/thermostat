var thermostat;

$( document ).ready(function() {

    thermostat = new Thermostat();
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

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      $('body').attr('class', thermostat.energyUsage());
    }

});
