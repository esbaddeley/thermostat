$( document ).ready(function() {

  var thermostat = new Thermostat();
  var tempColour, cityName, temp, city;
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

  $('section#temperature').css('color', changeColour);

  $('#temperature').text(thermostat.temperature);

  $('#reset').click(function(){
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });

  $('#tempup').click(function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
    $('section#temperature').css('color', changeColour);
  });

  $('#tempdown').click(function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
    $('section#temperature').css('color', changeColour);
  });

  $('#poweron').click(function(){
    thermostat.switchPowerModeOn();
    $('#power-saving-status').text(thermostat.powerMode());

  });

  $('#poweroff').click(function(){
    thermostat.switchPowerModeOff();
    $('#power-saving-status').text(thermostat.powerMode());
  });


  // $.ajax({
  //   url: http://api.openweathermap.org/data/2.5/forecast/weather?q=Londonid=524901&APPID=ca6f6c4482e27abd7c68f8d5e303960f
  //   data:
  //   success:
  //   dataType:
  // });
  $("#userInput").on("submit", function( event ){
    event.preventDefault();
    city = $( this ).serialize() ;
    $.get('http://api.openweathermap.org/data/2.5/forecast/weather?' + city + '&APPID=ca6f6c4482e27abd7c68f8d5e303960f&units=metric', function( report ) {
      console.log(report);
      console.log(report.city.name);
      console.log(report.list[0].main.temp);
      console.log(report.list[0].weather[0].main);
      cityName = report.city.name;
      temp = report.list[0].main.temp;
      weather = report.list[0].weather[0].main;
      $('#cityName').text(cityName);
      $('#temp').text(temp);
      $('#forecast').text(weather);
    });
  })
  console.log(city)




  // $('button#')





});
