import { useRef, useState } from 'react';
import './App.css';
import { BsListCheck } from "react-icons/bs";
import { FcEngineering } from "react-icons/fc";
import { BiListPlus, BiTrash, BiCheck } from "react-icons/bi";

function App() {

  const [todoList, setTodoList] = useState([])
  const [task, setTask] = useState("")

  const inputTask = useRef("")

  const addTask = () => {
    setTodoList([...todoList, {taskItem: task, completed: false}])
    inputTask.current.value = ""
    setTask("")
    //console.log(todoList)
  }

  const completeTask = (taskToComplete) => {
    setTodoList(todoList.map(items => {
      if (items.taskItem === taskToComplete)
        items.completed = true
      return items
    }))
  }


  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter(item => item.taskItem !== taskToDelete))
  }

  return (
		<div className="App">
			<h1>
				<span>
					<BsListCheck />
				</span>
				To-do List
			</h1>

			<div>
				<input
					ref={inputTask}
					type="text"
					placeholder="Task..."
					onKeyDown={(event) => {
						if (event.keyCode === 13) addTask();
					}}
					onChange={(event) => setTask(event.target.value)}
				/>
				<button onClick={addTask}>
					<BiListPlus />
					Add Task
				</button>
			</div>
			<hr />
			<div>
				<ul>
					{todoList.map((todo, key) => (
						<div id="task">
							<FcEngineering />
							<li key={key}>{todo.taskItem}</li>
							<button onClick={() => completeTask(todo.taskItem)}>
								<BiCheck />
								Completed
							</button>
							<button onClick={() => deleteTask(todo.taskItem)}>
								<BiTrash />
							</button>
							<div>
								{todo.completed ? (
									<h4>Task completed</h4>
								) : (
									<h4>Task not completed</h4>
								)}
							</div>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
