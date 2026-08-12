import type { ListProps } from "../types";
import Icon from "./Icon"
import Task from "./Task";

function List ({ tasksList }: ListProps) {
    return (
        <>
            <div className="m-10 w-fit bg-todo-list px-4 py-2 flex flex-col gap-2 rounded-lg">
                <header className="mb-4">
                    <h2 className="text-lg">Title</h2>
                </header>
                <ul>
                    {
                        tasksList.map(task => (
                            <li key={task.id}>
                                <Task id={task.id} name={task.name} onDeleteClick={task.onDeleteClick} />
                            </li>
                        ))
                    }
                </ul>
                <footer>
                    <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-400 hover:cursor-pointer">
                        <Icon>add</Icon>
                        <span>Add task</span>
                    </button>
                </footer>
            </div>
        </>
    )
}

export default List