import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../features/todo/Slice';

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const [editableStates, setEditableStates] = useState({});
  const dispatch = useDispatch();
  
  const handleEdit = (id, task) => {
    setEditableStates((prevStates) => ({
      ...prevStates,
      [id]: { editable: true, msg: task }
    }));
  };

  const handleSave = (id) => {
    const task = editableStates[id].msg;
    dispatch(updateTask({ id, task }));
    setEditableStates((prevStates) => ({
      ...prevStates,
      [id]: { editable: false, msg: '' }
    }));
  };

  const handleChange = (id, value) => {
    setEditableStates((prevStates) => ({
      ...prevStates,
      [id]: { ...prevStates[id], msg: value }
    }));
  };

  useEffect(() => {
    const newEditableStates = {};
    todos.forEach((todo) => {
      newEditableStates[todo.id] = { editable: false, msg: todo.task };
    });
    setEditableStates(newEditableStates);
  }, [todos]);

  return (
    <ul className="">
      {todos.map((todo) => (
        <li
          className="mt-10 flex justify-between items-center text-center ml-96 bg-zinc-800 px-4 py-2 w-5/12 rounded"
          key={todo.id}
        >
          <input
            type="text"
            value={editableStates[todo.id]?.msg || todo.task}
            onChange={(e) => handleChange(todo.id, e.target.value)}
            readOnly={!editableStates[todo.id]?.editable}
            className="bg-zinc-800 text-white w-64"
          />
          <button
            onClick={() => {
              editableStates[todo.id]?.editable
                ? handleSave(todo.id)
                : handleEdit(todo.id, todo.task);
            }}
            className="text-black bg-blue-300 rounded ml-48 w-12 py-1 h-8"
          >
            {editableStates[todo.id]?.editable ? 'Save' : 'Edit'}
          </button>

          <div className="flex space-x-2">
            <button
              onClick={() => {
                console.log('Deleting task with id:', todo.id);
                dispatch(deleteTask(todo.id));
              }}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
