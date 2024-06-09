import { Month, MonthToValueMap } from "./store.interface";

export function getEmptyValueMap(): MonthToValueMap {
  return {
    [Month.January2024]: 0,
    [Month.February2024]: 0,
    [Month.March2024]: 0,
    [Month.April2024]: 0,
    [Month.May2024]: 0,
    [Month.June2024]: 0,
    [Month.July2024]: 0,
    [Month.August2024]: 0,
    [Month.September2024]: 0,
    [Month.October2024]: 0,
    [Month.November2024]: 0,
    [Month.December2024]: 0,
  }
}

