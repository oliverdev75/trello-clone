import Icon from "./Icon"
import type { TaskProps } from "../types"
import useTask from "../hooks/useTask"

function Task ({ id, name }: TaskProps) {
    const { deleteTask } = useTask()
    
    return (
        <>
            <div className="flex w-60 px-4 py-2 bg-white rounded-lg justify-between items-center">
                <header>
                    <span className="text-nowrap">{name}</span>
                </header>
                <footer>
                    <button onClick={() => deleteTask(id)} className="flex items-center text-red-500 hover:cursor-pointer">
                        <Icon>delete</Icon>
                    </button>
                </footer>
            </div>
        </>
    )

}

export default Task