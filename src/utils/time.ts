import { getDay, getHours } from "date-fns";

export const formatSlotFromDate = (date: Date): string => {
  // @ts-expect-error Indexing into a numbered map
  return `${dayMap[getDay(date)]} ${timeMap[getHours(date)]}`;
};

export const dayMap = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednsday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

export const timeMap = {
  0: "12:00 AM",
  1: "1:00 AM",
  2: "2:00 AM",
  3: "3:00 AM",
  4: "4:00 AM",
  5: "5:00 AM",
  6: "6:00 AM",
  7: "7:00 AM",
  8: "8:00 AM",
  9: "9:00 AM",
  10: "10:00 AM",
  11: "11:00 AM",
  12: "12:00 PM",
  13: "1:00 PM",
  14: "2:00 PM",
  15: "3:00 PM",
  16: "4:00 PM",
  17: "5:00 PM",
  18: "6:00 PM",
  19: "7:00 PM",
  20: "8:00 PM",
  21: "9:00 PM",
  22: "10:00 PM",
  23: "11:00 PM",
};

export function timeSince(date: Date) {
  const seconds = Math.floor(
    // @ts-expect-error time stuff
    (new Date() - new Date(date)) / 1000,
  );
  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [period, secondsInPeriod] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInPeriod);
    if (interval >= 1) {
      //@ts-expect-error coppied
      return interval + period[0] + (interval > 1 ? "" : "") + " ago";
    }
  }

  return "Just Now";
}
