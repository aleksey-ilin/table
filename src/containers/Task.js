import { connect } from 'react-redux';
import Component from '../components/Task';
import * as actionCreators from '../actions';
import { tasksSelector } from '../selectors';

const Container = connect(
  (state) => {
    const props = {
      tasks: tasksSelector(state),
      runingTask: state.runingTask,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
