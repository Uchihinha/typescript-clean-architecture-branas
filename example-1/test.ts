import { calculateRide, isNight, isSunday } from './after';

test('Deve calcular uma corrida de taxi em dias normais', function () {
  // given
  const distance = 1000;
  const date = new Date('2021-07-10T10:00:00');
  // when
  const price = calculateRide(distance, date);
  // then
  expect(price).toBe(2100);
});

test('Deve calcular uma corrida de taxi a noite', function () {
  const distance = 1000;
  const price = calculateRide(distance, new Date('2021-07-10T23:00:00'));
  expect(price).toBe(3900);
});

test('Deve calcular uma corrida de taxi no domingo', function () {
  const distance = 1000;
  const price = calculateRide(distance, new Date('2021-07-11T10:00:00'));
  expect(price).toBe(2900);
});

test('Deve ser noite', function () {
  const validateIsOvernight = isNight(new Date('2021-07-10T23:00:00'));
  expect(validateIsOvernight).toBeTruthy();
});

test('Deve ser domingo', function () {
  const validateIsSunday = isSunday(new Date('2021-07-11T10:00:00'));
  expect(validateIsSunday).toBeTruthy();
});
