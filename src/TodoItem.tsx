import { useState, useEffect, useRef } from "react";
import "./TodoItem.css";

export interface TodoItemProps {
    readonly id: number;
    readonly content: string;
    readonly updateContent: (id: number, updatedContent: string) => void;
}

export default function TodoItem({id, content, updateContent}: TodoItemProps) {
    const [ draftContent, updateDraftContent ] = useState(content)
    const contentRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const selection = window.getSelection()
        selection?.setPosition(contentRef.current?.childNodes[0] || null, draftContent.length);
    }, [draftContent])

    return <div className="TodoItem-wrapper">
        <div className="TodoItem-content" 
            contentEditable="true" 
            ref={contentRef}
            onFocus={() => {
                const selection = window.getSelection()
                selection?.setPosition(contentRef.current?.childNodes[0] || null, draftContent.length);
            }}
            onInput={e => {updateDraftContent(e.currentTarget.textContent || ""); e.preventDefault()}}
            onBlur={e => {
                updateContent(id, draftContent)}}>
            {draftContent}
        </div>
    </div>
}