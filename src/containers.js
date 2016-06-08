// this container creates a "store aware" container to wrap around the components
// created after writing the action & reducer

import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';

//container for TodoList component
export const TodoList = connect(
  function mapStateToProps(state) {
    return {
      todos: state
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    }
  }
)(components.TodoList)
