import React from 'react';
import TodoList from './components/TodoList';
import {connect} from 'react-redux';
import AddTodo from './components/AddTodo';



function App(props) {
  const { todos } = props
  return (
    <div>
      < AddTodo />
      < TodoList todos={todos} />
    </div>
  );
}
const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(App);
