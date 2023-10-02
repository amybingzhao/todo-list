export interface TodoItemProps {
    readonly content: string;
}

export default function TodoItem({content}: TodoItemProps) {
    return <div>
        {content}
    </div>
}