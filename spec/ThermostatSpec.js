describe ('Thermostat', function(){
  thermostat1 = new Thermostat();


    it ('sets thermostat temperature to 20 degrees', function(){
      expect(thermostat1.temperature).toEqual(20);
    });

    it ('increases the temperature by 1 degree', function (){
      thermostat1.upButton();
      expect(thermostat1.temperature).toEqual(21);
    });

    it ('decreases the temperature by 1 degree', function (){
      thermostat1.downButton();
      expect(thermostat1.temperature).toEqual(20);
    });


    it ('fails when reaches minimum temp', function() {
      for(var i = 20; i > 10; i--){
      thermostat1.downButton();
    }
    expect(thermostat1.downButton()).toEqual(this.MIN_TEMP);
    });

    it ('can change powersaving mode', function(){
      expect(thermostat1.isPowerSaving()).toEqual(true);
    });

    it ('sets maxtemp when power saving mode is on', function() {
      thermostat1.temperature = 25;
      expect(thermostat1.upButton()).toEqual("Power saving, max temp reached");
    });

    it ('sets maxtemp when power saving mode is off', function() {
      thermostat1.temperature = 32;
      thermostat1.isntPowerSaving()
      expect(thermostat1.upButton()).toEqual("max temp reached");
    });
  });
