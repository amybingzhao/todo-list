import './App.css';
import TodoColumn from './TodoColumn';
import { useState } from "react";
import {DndContext} from '@dnd-kit/core';

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
  const [activeTaskId, setActiveTaskId] = useState<null | number>(null);


  return (
    <div className="App">
      <div className="App-Header">
        <div className="App-Title">To-do List</div>
      </div>
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className="App-ColumnsWrapper">
          {
            todoColumns.map(c => <TodoColumn updateItems={updateItems} name={c.name} items={c.items}/>)
          }
        </div>
      </DndContext>
    </div>
  );

  // @ts-ignore
  function handleDragStart({active}: DragStartEvent) {
    setActiveTaskId(active.id as number);
  }

  // @ts-ignore
  function handleDragEnd(event: DragEndEvent) {
    if (event.over) {
      const originalColumn = todoColumns.filter(c => c.items.filter(i => i.id == activeTaskId).length > 0)[0]
      const newColumn = todoColumns.filter(c => c.name == event.over.id)[0]
      if (originalColumn !== undefined && newColumn != undefined && originalColumn.name != newColumn.name) {
        const taskToMove = originalColumn.items.filter(i => i.id == activeTaskId)[0]
        const taskToMoveIndex = originalColumn.items.indexOf(taskToMove)
        originalColumn.items.splice(taskToMoveIndex, 1)
        const updatedOriginalColumn = {...originalColumn, items: [...originalColumn.items]}
        const updatedNewColumn = { ...newColumn, items: [...newColumn.items, taskToMove]}
        const updatedTodoColumns = todoColumns.map(c => c.name === originalColumn.name ? updatedOriginalColumn : c.name === newColumn.name ? updatedNewColumn : {...c})
        setNewTodoColumns(updatedTodoColumns)
      }
      setActiveTaskId(null)
    }
  }
}

export default App;
