import React from 'react';
class TodoList extends React.Component {
  state = {
    newTodo: '',
    items: ['Buy milk', 'Kill the cat'],
  };

  handleInput = (event) => {
    const newTodo = event.target.value;

    this.setState({ newTodo: newTodo });
  };

  handleAddTodo = () => {
    const { newTodo, items } = this.state;
    items.push(newTodo);
    this.setState({ newTodo: '', items: items });
  };

  render() {
    const items = this.state.items.map((name, index) => (
      <li key={name + index}>{name}</li>
    ));
    return (
      <div>
        <h3>TodoList</h3>
        <input
          name='newTodo'
          value={this.state.newTodo}
          onChange={this.handleInput}></input>
        <button onClick={this.handleAddTodo}>Add</button>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default TodoList;
