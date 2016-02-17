describe ('Thermostat', function(){
  thermostat1 = new Thermostat();

});

it('sets thermostat temperature to 20 degrees', function(){
  expect(thermostat1.temperature).toEqual(20);
});

it ('increases the temperature by 1 degree', function (){
  thermostat1.UpButton();
  expect(thermostat1.temperature).toEqual(21);
});

it ('decreases the temperature by 1 degree', function (){
  thermostat1.DownButton();
  expect(thermostat1.temperature).toEqual(20);
});
