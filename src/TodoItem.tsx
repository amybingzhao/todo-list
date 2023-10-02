import "./TodoItem.css";

export interface TodoItemProps {
    readonly content: string;
}

export default function TodoItem({content}: TodoItemProps) {
    return <div className="TodoItem-wrapper">
        <div className="TodoItem-content">
            {content}
        </div>
    </div>
}