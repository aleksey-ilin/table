import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const tasks = handleActions({
  [actions.addTask](state, { payload: { task } }) {
    return { ...state, [task.id]: task };
  },
  [actions.removeTask](state, { payload: { id } }) {
    return _.omit(state, id);
  },
  [actions.toggleTaskState](state, { payload: { id } }) {
    const task = state[id];
    const newState = task.state === 'active' ? 'finished' : 'active';
    const updatedTask = { ...task, state: newState };
    return { ...state, [task.id]: updatedTask };
  },
  [actions.updateTaskText](state, { payload: { id, text } }) {
    const task = state[id];
    return { ...state, [task.id]: { ...task, text } };
  },
  [actions.updatePlan](state, { payload: { id, plan } }) {
    const task = state[id];
    return { ...state, [task.id]: { ...task, plan } };
  },
  [actions.updateFact](state, { payload: { id, fact } }) {
    const task = state[id];
    return { ...state, [task.id]: { ...task, fact } };
  },
  [actions.updatePercent](state, { payload: { id, percent } }) {
    const task = state[id];
    return { ...state, [task.id]: { ...task, percent } };
  },
}, {});

const runingTask = handleActions({
  [actions.updateRunnigTask](state, { payload: { id } }) {
    return id;
  },
}, '-1');

const activePropertiesTask = handleActions({
  [actions.showPropertiesTask](state, { payload: { id } }) {
    return id;
  },
}, '-1');

export default combineReducers({
  tasks,
  runingTask,
  activePropertiesTask,
});
