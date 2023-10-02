import ReactDOM from "react-dom";
import { ChangeEvent, useState } from "react";
import Draggable from 'react-draggable'; 
import "./NewItemModal.css";

export interface NewItemModalProps {
    readonly isOpen: boolean;
    readonly closeModal: () => void;
    readonly onSubmit: (newItem: TodoItem) => void;
}

export default function NewItemModal({isOpen, closeModal, onSubmit}: NewItemModalProps) {
    const [ newItemContent, setNewItemContent ] = useState("")

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewItemContent(event.target.value);
    }

    return isOpen
        ? ReactDOM.createPortal(
            <Draggable>
                <div className="NewItemModal-wrapper">
                    <div className="NewItemModal-main">
                        <div className="NewItemModal-header">
                            <div className="NewItemModal-title">Add a new item</div>
                            <a className="NewItemModal-closeButton" onClick={closeModal}>x</a>
                        </div>
                        <input className="NewItemModal-input" value={newItemContent} onChange={handleInputChange}/>
                        <div className="NewItemModal-footer">
                            <a className="NewItemModal-submitButton" onClick={() => {
                                onSubmit({content: newItemContent})
                                closeModal()
                            }}>Submit</a>
                        </div>
                    </div>
                </div>
            </Draggable>, 
            document.body)
        : null;
}