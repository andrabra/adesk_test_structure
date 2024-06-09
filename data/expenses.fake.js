// store.interface.js
import { Month } from "./store.interface.js";
// const Month = {
//     January2024: "January2024",
//     February2024: "February2024",
//     March2024: "March2024",
//     April2024: "April2024",
//     May2024: "May2024",
//     June2024: "June2024",
//     July2024: "July2024",
//     August2024: "August2024",
//     September2024: "September2024",
//     October2024: "October2024",
//     November2024: "November2024",
//     December2024: "December2024",
//   };

export const ExpensesFake = [
  {
    name: "Бюджет Расходов",
    id: "10",
    children: [
      {
        name: "Услуги",
        id: "20",
        children: [
          {
            name: "Аудит",
            valueMap: {
              [Month.January2024]: -900000,
              [Month.February2024]: -800000,
              [Month.March2024]: -300000,
              [Month.April2024]: -0,
              [Month.May2024]: -0,
              [Month.June2024]: -0,
              [Month.July2024]: -0,
              [Month.August2024]: -0,
              [Month.September2024]: -0,
              [Month.October2024]: -0,
              [Month.November2024]: -0,
              [Month.December2024]: -0,
            },
            id: "1",
          },
          {
            name: "Услуги электрика",
            id: "30",
            children: [
              {
                name: "Вставить лампочку",
                valueMap: {
                  [Month.January2024]: -900000,
                  [Month.February2024]: -800000,
                  [Month.March2024]: -300000,
                  [Month.April2024]: -0,
                  [Month.May2024]: -0,
                  [Month.June2024]: -0,
                  [Month.July2024]: -0,
                  [Month.August2024]: -0,
                  [Month.September2024]: -0,
                  [Month.October2024]: -0,
                  [Month.November2024]: -0,
                  [Month.December2024]: -0,
                },
                id: "2",
              },
              {
                name: "Вставить что-то",
                valueMap: {
                  [Month.January2024]: -900000,
                  [Month.February2024]: -800000,
                  [Month.March2024]: -300000,
                  [Month.April2024]: -0,
                  [Month.May2024]: -0,
                  [Month.June2024]: -0,
                  [Month.July2024]: -0,
                  [Month.August2024]: -0,
                  [Month.September2024]: -0,
                  [Month.October2024]: -0,
                  [Month.November2024]: -0,
                  [Month.December2024]: -0,
                },
                id: "3",
              },
            ],
          },
        ],
      },
    ],
  },
];
