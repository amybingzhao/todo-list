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
      <div className="App-ColumnsWrapper">
        {
          todoColumns.map(c => <TodoColumn name={c.name} items={c.items}/>)
        }
      </div>
    </div>
  );
}

export default App;
