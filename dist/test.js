"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const after_1 = require("./after");
test('Deve calcular uma corrida de taxi em dias normais', function () {
    // given
    const distance = 1000;
    const date = new Date('2021-07-10T10:00:00');
    // when
    const price = (0, after_1.calculateRide)(distance, date);
    // then
    expect(price).toBe(2100);
});
test('Deve calcular uma corrida de taxi a noite', function () {
    const distance = 1000;
    const price = (0, after_1.calculateRide)(distance, new Date('2021-07-10T23:00:00'));
    expect(price).toBe(3900);
});
test('Deve calcular uma corrida de taxi no domingo', function () {
    const distance = 1000;
    const price = (0, after_1.calculateRide)(distance, new Date('2021-07-11T10:00:00'));
    expect(price).toBe(2900);
});
test('Deve ser noite', function () {
    const validateIsOvernight = (0, after_1.isNight)(new Date('2021-07-10T23:00:00'));
    expect(validateIsOvernight).toBeTruthy();
});
test('Deve ser domingo', function () {
    const validateIsSunday = (0, after_1.isSunday)(new Date('2021-07-11T10:00:00'));
    expect(validateIsSunday).toBeTruthy();
});
