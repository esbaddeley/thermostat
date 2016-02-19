describe ('Thermostat', function(){
  var thermostat;
  var temp;

  beforeEach(function() {
    thermostat = new Thermostat();
    temp = thermostat.DEFAULT_TEMP;
  });

    it ('sets thermostat temperature to 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });


    describe("#up and #down change temperature", function() {

      it ('increases the temperature by 1 degree', function () {
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
      });

      it ('decreases the temperature by 1 degree', function () {
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19);
      });
      it ('fails when reaches minimum temp', function() {
        for(var i = 20; i > 10; i--){
        thermostat.down();
      }
      expect(thermostat.down()).toEqual(this.MIN_TEMP);
      });
  });


    describe("#switchPowerSaving", function(){

      it ('can change powersaving mode', function(){
        thermostat.switchPowerSaving();
        expect(thermostat.isInPowerSavingMode()).toEqual(false);
      });
  });

    it ('checks power saving is on by default', function(){
      expect(thermostat.isInPowerSavingMode()).toEqual(true);
    });

    it ('resets the temp to temperature', function(){
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(temp);
    });


    describe("#energyUsage", function(){

      it ('checks energy usage', function() {
        thermostat.temperature = 17;
        expect(thermostat.energyUsage()).toEqual("low");
      });

      it ('checks energy usage', function() {
        thermostat.temperature = 20;
        expect(thermostat.energyUsage()).toEqual("medium");
      });

      it ('checks energy usage', function() {
        thermostat.temperature = 26;
        expect(thermostat.energyUsage()).toEqual("high");

      });
    });

  });
