import { connect } from 'react-redux';
import Component from '../components/Tasks';
import * as actionCreators from '../actions';
import { tasksSelector } from '../selectors';

const Container = connect(
  (state) => {
    const props = {
      tasks: tasksSelector(state),
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;