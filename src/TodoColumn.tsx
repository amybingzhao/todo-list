import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoColumn.css";
import {useDroppable} from '@dnd-kit/core';

export interface TodoColumnProps {
    readonly name: string;
    readonly items: TodoItem[];
    readonly updateItems: (columnName: string, updatedItems: TodoItem[]) => void;
}

export default function TodoColumn({ name, items, updateItems }: TodoColumnProps) {
    const [ isEditingNewItem, setIsEditingNewItem ] = useState(false)

    function updateItem(id: number, updatedContent: string) {
        let updatedItems;
        if (id == -1) {
            // TODO replace this with actual id generation code
            updatedItems = [...items, { id: Math.floor(Math.random() * 1000000), content: updatedContent }]
        } else {
            updatedItems = items.map(i => i.id == id ? {...i, content: updatedContent } : {...i})
        }
        updateItems(name, updatedItems)
    }

    const {isOver, setNodeRef} = useDroppable({
        id: name,
    });

    return (
        <div className="TodoColumn-wrapper">
            <div className="TodoColumn-header">{name}</div>
            {items.map(i => <TodoItem id={i.id} updateContent={updateItem} content={i.content}/>)}
            <div className="TodoColumn-newItemSectionWrapper" ref={setNodeRef}>
                {
                    isEditingNewItem
                        ? <TodoItem id={-1} updateContent={(id, updatedContent) => {
                            if (updatedContent.length > 0) {
                                updateItem(id, updatedContent)
                            }
                            setIsEditingNewItem(false)
                        }} content={""}/>
                        : <div className="TodoColumn-newItemButtonWrapper">
                                <a className="TodoColumn-newItemButton" onClick={() => setIsEditingNewItem(true)}>+ Add an item</a>
                            </div>
                }
            </div>
        </div>);
}