
import React from "react";
import "./TodoForm.css"

function TodoForm({addTodo,
  setOpenModal}) {


  const [newTodoValue, setNewTodovalue] = React.useState('');

  const onSubmit = (event) => {  
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);

  }

  const  onCancel = () => {  
    setOpenModal(false);
  }

  const  onChange = (event) => {  
    setNewTodovalue(event.target.value);
  }
  
  
  
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
      value={newTodoValue}
      onChange={onChange}
      placeholder="Escribi aca....">
      </textarea>
      <div className="TodoForm-buttonContainer">
      <button
      type="button"
      className="TodoForm-button TodoForm-button--cancel"
      onClick={onCancel}
      >Cancelar</button>
      <button
      type="submit"
      className="TodoForm-button TodoForm-button--add"
      >Añadir</button>
      </div>
    </form>
  )
}

export {TodoForm};