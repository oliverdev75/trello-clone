import Icon from "./Icon"
import type { TaskProps } from "../types"
import useTask from "../hooks/useTask"
import { useEffect, useRef, useState } from "react"
import type { RefObject, KeyboardEvent } from "react"
import IconButton from "./IconButton"

function Task ({ id, name }: TaskProps) {
    const [newName, setNewName] = useState("")
    const [isEditingTask, setIsEditingTask] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const { updateTask, deleteTask } = useTask()

    const editTask = () => {
        setNewName(name)
        setIsEditingTask(true)
    }

    const handleUpdate = () => {
        setIsEditingTask(false)
        updateTask(id, newName)
        setNewName("")
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleUpdate()
        } else if (e.key === "Esc" || e.key === "Escape") {
            setIsEditingTask(false)
            setNewName("")
        }
    }

    useEffect(() => {
        if (isEditingTask) {
            inputRef.current && inputRef.current.focus()
        }
    }, [isEditingTask])

    return (
        <>
            <div className="flex w-60 px-4 py-2 bg-white rounded-lg justify-between items-center">
                <header>
                    {isEditingTask
                        ? <input 
                            ref={inputRef as RefObject<HTMLInputElement>}
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                            onBlur={handleUpdate}
                            onKeyDown={onKeyDown}
                            placeholder="Task name..."
                            type="text"
                            className="h-fit w-50 border-0 focus:outline-0 focus:border-b border-gray-300"
                          /> 
                        : <span className="max-w-32 inline-block overflow-clip text-nowrap">{name}</span>
                    }
                </header>
                {!isEditingTask &&
                    <footer className="flex items-center gap-2">
                        <IconButton
                            icon="edit"
                            onClick={() => editTask()}
                            className="text-gray-400"
                        />
                        <IconButton
                            icon="delete"
                            onClick={() => deleteTask(id)}
                            className="text-red-500"
                        />
                    </footer>
                }
            </div>
        </>
    )

}

export default Task