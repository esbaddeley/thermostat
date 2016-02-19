function Thermostat() {
  'use strict';

  this.MIN_TEMP        = 10;
  this.DEFAULT_TEMP    = 20;
  this.PSM_MAX_TEMP    = 25;
  this.MAX_TEMP        = 32;
  this.powerSavingMode = true;
  this.temperature     = this.DEFAULT_TEMP;
  this.maxTemp         = this.PSM_MAX_TEMP;
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.isMaxTemperature = function () {
  return this.getCurrentTemperature() === this.maxTemp;
};

Thermostat.prototype.isMinTemperature = function () {
  return this.getCurrentTemperature() === this.MIN_TEMP;
};

Thermostat.prototype.isInPowerSavingMode = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.up = function () {
  if (this.getCurrentTemperature() >= this.maxTemp) {
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
    this.maxTemp = this.isInPowerSavingMode() ? this.PSM_MAX_TEMP : this.MAX_TEMP;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function () {
  if (this.getCurrentTemperature() < 18 ) return ("low");
  if (this.getCurrentTemperature() >= 18 && this.getCurrentTemperature() < 25 ) return ("medium");
  if (this.getCurrentTemperature() >= 25 ) return ("high");
};
