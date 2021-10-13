"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNight = exports.isSunday = exports.calculateRide = void 0;
const NIGHT_RATE = 3.9;
const SUNDAY_RATE = 2.9;
const DEFAULT_RATE = 2.1;
function calculateRide(distance, date) {
    if (isNight(date))
        return calculateRate(distance, NIGHT_RATE);
    if (isSunday(date))
        return calculateRate(distance, SUNDAY_RATE);
    return calculateRate(distance, DEFAULT_RATE);
}
exports.calculateRide = calculateRide;
function calculateRate(rate, distance) {
    return rate * distance;
}
function isSunday(date) {
    return date.getDay() === 0;
}
exports.isSunday = isSunday;
function isNight(date) {
    return date.getHours() >= 22;
}
exports.isNight = isNight;
