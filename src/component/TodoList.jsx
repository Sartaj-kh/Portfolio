import { useState } from "react";

function TodoList() {
  const [todolist, setTodolist] = useState([]); // Initialize state

  const saveToDoList = (event) => {
    event.preventDefault(); // Prevent page reload
    const todoListName = event.target.todoListName.value.trim(); // Access input value and trim spaces

    if (!todoListName) {
      alert("Please enter a valid todo!");
      return;
    }

    if (!todolist.includes(todoListName)) {
      const finaltodolist = [...todolist, todoListName];
      setTodolist(finaltodolist);
    } else {
      alert("Todo already exists...");
    }

    event.target.todoListName.value = ""; // Clear input field
  };

  let list = todolist.map((value, index) => {
    return <toDoListItem key={index} value={value} />;
  });

  return (
    <div className="text-center py-4 text-2xl">
      <h1 className="my-2">Todo List</h1>
      <form onSubmit={saveToDoList}>
        <input
          type="text"
          name="todoListName"
          className="p-2 border rounded"
          placeholder="Enter your todo"
        />
        <button className="p-2 bg-cyan-500 text-white rounded my-2">
          Save
        </button>
      </form>
      <ul className="my-4 text-center">{list}</ul>
    </div>
  );
}

function toDoListItem({ value }) {
  return (
    <li className="flex justify-between items-center border-b py-2">
      {value} <span className="text-red-500 cursor-pointer">&times;</span>
    </li>
  );
}

export default TodoList;
