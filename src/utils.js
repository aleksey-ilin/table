import { round } from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const getNecessary = (fact, percent) => {
  const [hours, minutes, second] = fact.split(':');
  const factFormatted = Number(hours) + (Number(minutes) / 60) + (Number(second) / (60 * 60));
  return round(((100 * factFormatted / Number(percent)) - factFormatted), 1);
};
