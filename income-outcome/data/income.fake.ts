import { Month, StoreModel } from "./store.interface";

export const IncomeFake: StoreModel = [
  {
    name: "Бюджет доходов",
    id: "10",
    children: [
      {
        name: "Услуги",
        id: "20",
        children: [
          {
            name: "Аудит",
            valueMap: {
              [Month.January2024]: 900000,
              [Month.February2024]: 800000,
              [Month.March2024]: 300000,
              [Month.April2024]: 0,
              [Month.May2024]: 0,
              [Month.June2024]: 0,
              [Month.July2024]: 0,
              [Month.August2024]: 0,
              [Month.September2024]: 0,
              [Month.October2024]: 0,
              [Month.November2024]: 0,
              [Month.December2024]: 0,
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
                  [Month.January2024]: 900000,
                  [Month.February2024]: 800000,
                  [Month.March2024]: 300000,
                  [Month.April2024]: 0,
                  [Month.May2024]: 0,
                  [Month.June2024]: 0,
                  [Month.July2024]: 0,
                  [Month.August2024]: 0,
                  [Month.September2024]: 0,
                  [Month.October2024]: 0,
                  [Month.November2024]: 0,
                  [Month.December2024]: 0,
                },
                id: "2",
              },
              {
                name: "Вставить что-то",
                valueMap: {
                  [Month.January2024]: 900000,
                  [Month.February2024]: 800000,
                  [Month.March2024]: 300000,
                  [Month.April2024]: 0,
                  [Month.May2024]: 0,
                  [Month.June2024]: 0,
                  [Month.July2024]: 0,
                  [Month.August2024]: 0,
                  [Month.September2024]: 0,
                  [Month.October2024]: 0,
                  [Month.November2024]: 0,
                  [Month.December2024]: 0,
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
