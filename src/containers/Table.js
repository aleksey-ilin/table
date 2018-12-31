import { connect } from 'react-redux';
import Component from '../components/Table';
import * as actionCreators from '../actions';
import { tasksSelector } from '../selectors';

const Container = connect(
  (state) => {
    const props = {
      tasks: tasksSelector(state),
      activePropertiesTask: state.activePropertiesTask,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
