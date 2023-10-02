import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoColumn.css";

export interface TodoColumnProps {
    readonly name: string;
    readonly items: TodoItem[];
    readonly updateItems: (columnName: string, updatedItems: TodoItem[]) => void;
}

export default function TodoColumn({ name, items, updateItems }: TodoColumnProps) {
    const [ newItem, setNewItem ] = useState({content: ""})
    function updateItem(id: number, updatedContent: string) {
        const updatedItems = items.map(i => i.id == id ? {...i, content: updatedContent } : {...i})
        updateItems(name, updatedItems)
    }
    
    return (
        <div className="TodoColumn-wrapper">
            <div className="TodoColumn-header">{name}</div>
            {items.map(i => <TodoItem id={i.id} updateContent={updateItem} content={i.content}/>)}
            <div className="TodoColumn-newItemButtonWrapper">
                <a className="TodoColumn-newItemButton">+ Add an item</a>
            </div>
        </div>);
}