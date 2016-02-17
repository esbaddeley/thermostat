describe ('Thermostat', function(){
  thermostat1 = new Thermostat();


    it ('sets thermostat temperature to 20 degrees', function(){
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


    it ('fails when reaches minimum temp', function() {
      for(var i = 20; i > 10; i--){
      thermostat1.DownButton();
    }
    expect(thermostat1.DownButton()).toEqual(this.MIN_TEMP);
    });

    it ('sets maxtemp when power saving mode is on', function(){
        expect(thermostat1.isPowerSaving()).toEqual(true);
    });

    it ('sets maxtemp when power saving mode is on', function(){
        thermostat1.temperature = 25;
        expect(thermostat1.UpButton()).toEqual("Power saving, max temp reached");
    });

  });
