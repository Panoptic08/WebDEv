import React from 'react';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

function App() {
  return (
    <>
      <div className='text-center mt-10 text-2xl text-white'>Todos</div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
