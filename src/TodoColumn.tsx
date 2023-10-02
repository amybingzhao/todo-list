import TodoItem from "./TodoItem";
import "./TodoColumn.css";

export interface TodoColumnProps {
    readonly name: string;
    readonly items: TodoItem[];
}

export default function TodoColumn({ name, items }: TodoColumnProps) {
    return (
        <div className="TodoColumn-wrapper">
            <div className="TodoColumn-header">{name}</div>
            {items.map(i => <TodoItem content={i.content}/>)}
        </div>);
}