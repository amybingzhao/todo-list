import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoColumn from './TodoColumn';

function App() {
  const todoColumns = [
    {
      name: "Todo",
      items: [{content: "thing1"}]
    },
    {
      name: "In Progress",
      items: [{content: "thing 2"}, {content: "thing3"}],
    },
    {
      name: "Done",
      items: [{content: "done!!!"}]
    }
  ]

  return (
    <div className="App">
      {
        todoColumns.map(c => <TodoColumn name={c.name} items={c.items}/>)
      }
    </div>
  );
}

export default App;
