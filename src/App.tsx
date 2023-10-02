import './App.css';
import TodoColumn from './TodoColumn';
import { useState } from "react";
import NewItemModal from './NewItemModal';

function App() {
  const initialToDoColumns = [
    {
      name: "Todo",
      items: [{id: 1, content: "thing1"}]
    },
    {
      name: "In Progress",
      items: [{id: 2, content: "thing 2"}, {id: 3, content: "thing3"}],
    },
    {
      name: "Done",
      items: [{id: 4, content: "done!!!"}]
    }
  ]

  const [ isNewItemModalOpen, setNewItemModalOpen ] = useState(false)
  const [ todoColumns, setNewTodoColumns ] = useState(initialToDoColumns)
    // [
    //   {
    //     name: "Todo",
    //     items: [] as TodoItem[],
    //   },
    //   {
    //     name: "In Progress",
    //     items: [] as TodoItem[],
    //   },
    //   {
    //     name: "Done",
    //     items: [] as TodoItem[],
    //   }
    // ])
  
  const updateItems = (columnName: string, updatedItems: TodoItem[]) => {
    const updatedColumns = todoColumns.map(c => c.name == columnName ? { name: columnName, items: updatedItems } : {...c})
    setNewTodoColumns(updatedColumns)
  }

  return (
    <div className="App">
      <div className="App-Header">
        <div className="App-Title">To-do List</div>
        <div className="App-NewItemButtonWrapper">
          <a className="App-NewItemButton" onClick={() => setNewItemModalOpen(true)}>+</a>
        </div>
      </div>
      <div className="App-ColumnsWrapper">
        {
          todoColumns.map(c => <TodoColumn updateItems={updateItems} name={c.name} items={c.items}/>)
        }
      </div>
    </div>
  );
}

export default App;
