import { createSelector } from 'reselect';

const getTasks = state => state.tasks;
export const tasksSelector = createSelector(
  getTasks,
  tasks => Object.values(tasks),
);