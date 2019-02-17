import { connect } from 'react-redux';
import Component from '../components/Properties';
import * as actionCreators from '../actions';

const Container = connect(
  (state) => {
    const props = {
      tasks: state.tasks,
      activeProperties: state.activeProperties,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
