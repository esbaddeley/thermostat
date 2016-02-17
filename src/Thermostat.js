function Thermostat (){
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.power = false;
  this.onPower = 25;
  this.offPower = 32;
}

Thermostat.prototype.upButton = function(){
  if (this.temperature === this.offPower && this.power === false) return ("max temp reached");
  if (this.temperature === this.onPower && this.power) return ("Power saving, max temp reached");
  this.temperature +=1;
    //console.log(this.temperature);
};

Thermostat.prototype.downButton = function(){
   if (this.temperature < this.MIN_TEMP) return this.MIN_TEMP;
   this.temperature -=1;
};


Thermostat.prototype.isPowerSaving = function (){
  return this.power = true;
};

Thermostat.prototype.isntPowerSaving = function() {
  return this.power = false;
};
