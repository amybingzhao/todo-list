import './App.css';
import TodoColumn from './TodoColumn';
import { useState } from "react";
import NewItemModal from './NewItemModal';

function App() {
  // const todoColumns = [
  //   {
  //     name: "Todo",
  //     items: [{content: "thing1"}]
  //   },
  //   {
  //     name: "In Progress",
  //     items: [{content: "thing 2"}, {content: "thing3"}],
  //   },
  //   {
  //     name: "Done",
  //     items: [{content: "done!!!"}]
  //   }
  // ]

  const [ isNewItemModalOpen, setNewItemModalOpen ] = useState(false)
  const [ todoColumns, setNewTodoColumns ] = useState(
    [
      {
        name: "Todo",
        items: [] as TodoItem[],
      },
      {
        name: "In Progress",
        items: [] as TodoItem[],
      },
      {
        name: "Done",
        items: [] as TodoItem[],
      }
    ])
  
  const addNewItem = (item: TodoItem) => {
    const updatedColumns = [...todoColumns]
    const todoColumn = updatedColumns.filter(c => c.name === "Todo")[0]
    todoColumn.items.push(item)
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
          todoColumns.map(c => <TodoColumn name={c.name} items={c.items}/>)
        }
      </div>
      <NewItemModal isOpen={isNewItemModalOpen} onSubmit={addNewItem} closeModal={() => setNewItemModalOpen(false)}/>
    </div>
  );
}

export default App;
