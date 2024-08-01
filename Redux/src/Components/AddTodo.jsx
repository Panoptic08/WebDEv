import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/todo/Slice';

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if(input==""){
      alert("Enter something")
      return
    }
    dispatch(addTask(input));
    setInput("");
  };
  

  return (
    <form  className="space-x-3 mt-12 text-center">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-64"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
      onClick={(addTodoHandler)}
        className="text-white bg-indigo-500 border-0 w-30 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "
       style={{marginLeft: "0%"}}>
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
