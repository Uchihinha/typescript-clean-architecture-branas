const NIGHT_RATE = 3.9;
const SUNDAY_RATE = 2.9;
const DEFAULT_RATE = 2.1;

export function calculateRide(distance: number, date: Date): number {
  if (isNight(date)) return calculateRate(distance, NIGHT_RATE);

  if (isSunday(date)) return calculateRate(distance, SUNDAY_RATE);

  return calculateRate(distance, DEFAULT_RATE);
}

function calculateRate(rate: number, distance: number): number {
  return rate * distance;
}

export function isSunday(date: Date): boolean {
  return date.getDay() === 0;
}

export function isNight(date: Date): boolean {
  return date.getHours() >= 22;
}
