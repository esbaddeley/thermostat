$( document ).ready(function() {

  var thermostat = new Thermostat();
  var tempColour;

  // $('#temperature').thermometer( {
	// 	height: 300,
	// 	textColour: '#ffffff',
	// 	tickColour: '#ffffff',
  //   liquidColour: '#ff00ff',
  //   startValue: 5,
  //   pathToSVG: 'js/bower_components/jquery-thermometer/svg/thermo-bottom.svg',
  // });
  var changeColour = function backgroundColour(){
      if (thermostat.energyUsage() === 'low-usage') {
        return '#00C78C';
      } else if (thermostat.energyUsage() === 'medium-usage'){
        return '#FFA500';
      } else {
        return '#DC143C';
      }
    };

  $('body').css('background-color', changeColour);

  $('#temperature').text(thermostat.temperature);

  $('#reset').click(function(){
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });

  $('#tempup').click(function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
    $('body').css('background-color', changeColour);
  });

  $('#tempdown').click(function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
    $('body').css('background-color', changeColour);
  });

  $('#poweron').click(function(){
    thermostat.switchPowerModeOn();
    $('#power-saving-status').text(thermostat.powerMode());

  });

  $('#poweroff').click(function(){
    thermostat.switchPowerModeOff();
    $('#power-saving-status').text(thermostat.powerMode());
  });



  // $('button#')





});
