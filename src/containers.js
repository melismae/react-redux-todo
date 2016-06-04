// this container creates a "store aware" container to wrap around the components

import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';

//container for TodoList component
export const TodoList = connect(
  function mapStateToProps(state) {
    //
  },
  function mapDispatchToProps(dispatch) {
    //
  }
)(components.TodoList)
