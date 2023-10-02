import { useDraggable } from '@dnd-kit/core';
import { useState, useEffect, useRef } from "react";
import "./TodoItem.css";

export interface TodoItemProps {
    readonly id: number;
    readonly content: string;
    readonly updateContent: (id: number, updatedContent: string) => void;
}

export default function TodoItem({id, content, updateContent}: TodoItemProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        cursor: "grabbing",
      } : undefined;

    useEffect(() => {
        const selection = window.getSelection()
        selection?.setPosition(contentRef.current?.childNodes[0] || null, content.length);
    }, [content])

    return (
        <div className="TodoItem-wrapper"
            ref={setNodeRef}
            style={style} {...listeners} {...attributes}>
            <div className="TodoItem-content" 
                contentEditable="true" 
                ref={contentRef}
                onInput={e => {
                    updateContent(id, e.currentTarget.textContent || "")
                }}
                data-text="Start typing">
                {content}
            </div>
        </div>
    )
}