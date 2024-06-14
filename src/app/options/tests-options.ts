import { TestOptions } from '../shared/models/test-options.model';
import { TestsResult } from '../shared/models/testsResult.model';

export const testOptions: TestOptions[] = [
  { label: 'Не турбували взагалі', value: 0 },
  { label: 'Протягом декількох днів', value: 1 },
  { label: 'Більше половини часу', value: 2 },
  { label: 'Майже кожного дня', value: 3 },
];

export const testsResult: TestsResult[] = [
  {
    testId: 10,
    explanation: [
      {
        range: { min: 0, max: 4 },
        text: 'Ваші результати дуже низькі. Рекомендується звернутися до лікаря для діагностики.',
      },
      {
        range: { min: 5, max: 9 },
        text: 'Ви відчуваєте деякий дискомфорт. Рекомендується звернутися до спеціаліста для консультації.',
      },
      {
        range: { min: 10, max: 14 },
        text: 'Ваші результати показують помірний рівень симптомів. Рекомендується розглянути можливість консультації з лікарем.',
      },
      {
        range: { min: 15, max: 27 },
        text: 'Ви показали високий рівень симптомів. Рекомендується негайно звернутися до спеціаліста для отримання кваліфікованої допомоги.',
      },
    ],
  },
  {
    testId: 210,
    explanation: [
      {
        range: { min: 0, max: 4 },
        text: 'Ваші результати низькі. Ймовірно, у вас немає тривожного стану.',
      },
      {
        range: { min: 5, max: 9 },
        text: 'Ви відчуваєте деякий рівень тривоги. Рекомендується звернутися до спеціаліста для консультації.',
      },
      {
        range: { min: 10, max: 14 },
        text: 'Ваші результати показують помірний рівень тривоги. Рекомендується розглянути можливість консультації з фахівцем.',
      },
      {
        range: { min: 15, max: 21 },
        text: 'Ви показали високий рівень тривоги. Рекомендується звернутися до спеціаліста для отримання кваліфікованої допомоги.',
      },
    ],
  },
];
