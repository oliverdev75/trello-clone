import { useEffect, useState } from "react"
import type { ListProps } from "../types"
import Icon from "./Icon"
import Task from "./Task"
import TaskInput from "./TaskInput"
import useListContext from "../hooks/useListContext"

function List ({ tasksList }: ListProps) {
    const [newTaskInputVisibility, setNewTaskInputVisibility] = useState(false)
    const [newTaskInputFocus, setNewTaskInputFocus] = useState(false)
    const [newTaskName, setNewTaskName] = useState("")
    const { updateTodoTasksList } = useListContext()
    
    const createTask = () => {
        setNewTaskInputVisibility(true)
        setNewTaskInputFocus(true)
    }

    const putTask = () => {
        newTaskName && updateTodoTasksList([
            ...tasksList,
            {
                id: tasksList[tasksList.length - 1].id + 1,
                name: newTaskName
            }
        ])
        setNewTaskInputVisibility(false)
        setNewTaskName("")
    }

    const createMoreTasks = () => {
        newTaskName && updateTodoTasksList([
            ...tasksList,
            {
                id: tasksList[tasksList.length - 1].id + 1,
                name: newTaskName
            }
        ])
        setNewTaskName("")
    }

    return (
        <>
            <div className="m-10 w-fit bg-todo-list px-4 py-2 flex flex-col gap-2 rounded-lg">
                <header className="mb-4">
                    <h2 className="text-lg">Title</h2>
                </header>
                <ul className="flex flex-col gap-2">
                    {
                        tasksList.map(task => (
                            <li key={task.id}>
                                <Task {...task} />
                            </li>
                        ))
                    }
                </ul>
                {newTaskInputVisibility &&
                    <TaskInput
                        focus={newTaskInputFocus}
                        value={newTaskName}
                        onChange={e => setNewTaskName(e.target.value)}
                        onBlur={putTask}
                        onEnter={createMoreTasks}
                    />
                }
                <footer>
                    <button
                        onClick={createTask}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-400 hover:cursor-pointer"
                    >
                        <Icon>add</Icon>
                        <span>Add task</span>
                    </button>
                </footer>
            </div>
        </>
    )
}

export default List