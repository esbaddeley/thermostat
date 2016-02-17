function Thermostat (){
  this.temperature = 20;
  this.MIN_TEMP = 10;
}

Thermostat.prototype.UpButton = function(){
    this.temperature +=1;
    //console.log(this.temperature);
};

Thermostat.prototype.DownButton = function(){
   if (this.temperature < this.MIN_TEMP) return this.MIN_TEMP;
   this.temperature -=1;
};
