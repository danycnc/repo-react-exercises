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

  handleResetAll = () => {
    this.setState({ items: [] });
  };

  handleReset = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState(items);
  };

  render() {
    const items = this.state.items.map((name, index) => (
      <li key={name + index}>
        {name} <button onClick={() => this.handleReset(index)}>Delete</button>
      </li>
    ));

    return (
      <div>
        <h3>TodoList</h3>
        <input
          name='newTodo'
          value={this.state.newTodo}
          onChange={this.handleInput}></input>
        <button onClick={this.handleAddTodo}>Add</button>
        <button onClick={this.handleResetAll}>Delete All</button>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default TodoList;
