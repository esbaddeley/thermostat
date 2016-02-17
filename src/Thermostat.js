function Thermostat (){
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.Power = false;
  this.MaxPowerOn = 25;
}

Thermostat.prototype.UpButton = function(){
    if (this.temperature === this.MaxPowerOn && this.Power === true) return ("Power saving, max temp reached");
    this.temperature +=1;
    //console.log(this.temperature);
};

Thermostat.prototype.DownButton = function(){
   if (this.temperature < this.MIN_TEMP) return this.MIN_TEMP;
   this.temperature -=1;
};


Thermostat.prototype.isPowerSaving = function (){
  return this.Power = true;
};
