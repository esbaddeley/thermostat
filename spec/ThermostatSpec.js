describe ('Thermostat', function(){
  var thermostat1;
  var temp;

  beforeEach(function() {
    thermostat1 = new Thermostat();
    temp = thermostat1.temperature;
  });

    it ('sets thermostat temperature to 20 degrees', function(){
      expect(thermostat1.temperature).toEqual(20);
    });

    it ('increases the temperature by 1 degree', function (){
      thermostat1.upButton();
      expect(thermostat1.temperature).toEqual(21);
    });

    it ('decreases the temperature by 1 degree', function (){
      thermostat1.downButton();
      expect(thermostat1.temperature).toEqual(19);
    });

    it ('fails when reaches minimum temp', function() {
      for(var i = 20; i > 10; i--){
      thermostat1.downButton();
    }
    expect(thermostat1.downButton()).toEqual(this.MIN_TEMP);
    });

    it ('can change powersaving mode', function(){
      thermostat1.switchPowerSaving();
      expect(thermostat1.power).toEqual(false);
    });

    it ('sets maxtemp when power saving mode is on', function() {
      thermostat1.temperature = 25;
      expect(thermostat1.upButton()).toEqual("Power saving, max temp reached");
    });

    it ('sets maxtemp when power saving mode is off', function() {
      thermostat1.temperature = 32;
      thermostat1.switchPowerSaving();
      expect(thermostat1.upButton()).toEqual("max temp reached");
    });

    it ('checks power saving is on by default', function(){
      expect(thermostat1.power).toEqual(true);
    });

    it ('resets the temp to temperature', function(){
      thermostat1.resetTemp();
      expect(thermostat1.temperature).toEqual(temp);
    });

    it ('checks energy usage', function() {
      thermostat1.temperature = 17;
      expect(thermostat1.energyUsage()).toEqual("low");
    });

    it ('checks energy usage', function() {
      thermostat1.temperature = 20;
      expect(thermostat1.energyUsage()).toEqual("medium");
    });

    it ('checks energy usage', function() {
      thermostat1.temperature = 26;
      expect(thermostat1.energyUsage()).toEqual("high");

    });

  });
