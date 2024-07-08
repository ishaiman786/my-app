import React, { useState } from 'react';

function Todolist(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.item);
  const [completed, setCompleted] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    if (editedText.trim() !== '') {
      props.editItem(props.index, editedText.trim());
      setIsEditing(false);
    }
  };

  const handleToggleComplete = () => {
    setCompleted(!completed);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li className={`list-item ${completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          autoFocus
        />
      ) : (
        <span>{props.item}</span>
      )}
      <span className='icons'>
        {isEditing ? (
          <i className="fa-solid fa-check icon-tick" onClick={handleSave}></i>
        ) : (
          <i className="fa-solid fa-edit icon-edit" onClick={handleEditToggle}></i>
        )}
        <i className="fa-solid fa-trash-can icon-delete" onClick={() => props.deleteItem(props.index)}></i>
      </span>
    </li>
  );
}

export default Todolist;
