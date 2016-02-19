function Thermostat() {
  'use strict';

  this.MIN_TEMP = 10;
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.MAX_TEMP = this.powerSavingMode ? 25 : 32;
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.isMaxTemperature = function () {
  return this.getCurrentTemperature() === this.MAX_TEMP;
};

Thermostat.prototype.isMinTemperature = function () {
  return this.getCurrentTemperature() === this.MIN_TEMP;
};

Thermostat.prototype.isInPowerSavingMode = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.up = function () {
  if (this.getCurrentTemperature() >= this.MAX_TEMP) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.getCurrentTemperature() <= this.MIN_TEMP) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.switchPowerSaving = function () {
    this.powerSavingMode = !this.powerSavingMode;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function () {
  if (this.getCurrentTemperature() < 18 ) return ("low");
  if (this.getCurrentTemperature() >= 18 && this.getCurrentTemperature() < 25 ) return ("medium");
  if (this.getCurrentTemperature() >= 25 ) return ("high");
};
