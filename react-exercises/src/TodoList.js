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
    return (
      <div>
        <input
          name='newTodo'
          value={this.state.newTodo}
          onChange={this.handleInput}></input>
        <button onClick={this.handleAddTodo}>Add</button>
        <button onClick={this.handleResetAll}>Delete All</button>
        {this.props.render(this.state.items, this.handleReset)}
      </div>
    );
  }
}

export default TodoList;
