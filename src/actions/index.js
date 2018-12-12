import _ from 'lodash';
import { createAction } from 'redux-actions';

export const addTask = createAction('TASK_ADD', task => (
  { task: { ...task, state: 'active', id: _.uniqueId() } }));
export const updateTaskText = createAction('TASK_TEXT_UPDATE');
export const updatePlan = createAction('TASK_PLAN_UPDATE');
export const updateFact = createAction('TASK_FACT_UPDATE');
export const removeTask = createAction('TASK_REMOVE');
export const toggleTaskState = createAction('TASK_STATE_TOGGLE');
