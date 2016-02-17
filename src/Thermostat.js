function Thermostat (){
  this.temperature = 20;
}

Thermostat.prototype.UpButton = function(){
    this.temperature +=1;
    //console.log(this.temperature);
};

Thermostat.prototype.DownButton = function(){
  this.temperature -=1;

};
