export const WeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday"
];
export const WeatherAppContents = [
  { Date: 9 },
  { Date: 10 },
  { Date: 11 },
  { Date: 12 },
  { Date: 13 },
  { Date: 14 },
  { Date: 15 }
];

export const DaysAgo = days =>
  days > 0
    ? days + "day" + (Math.abs(days) === 1 ? "" : "s") + "later"
    : days < 0 - days > 0
    ? days + "day" + (Math.abs(days) === 1 ? "" : "s") + "ago"
    : "today";
