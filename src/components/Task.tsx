import Icon from "./Icon"
import type { TaskProps } from "../types"

function Task ({ id, name, onDeleteClick }: TaskProps) {

    return (
        <>
            <div className="flex w-60 px-4 py-2 bg-white rounded-lg justify-between items-center">
                <header>
                    <span className="text-nowrap">{name}</span>
                </header>
                <footer>
                    <button onClick={onDeleteClick} className="flex items-center text-red-500 hover:cursor-pointer">
                        <Icon>delete</Icon>
                    </button>
                </footer>
            </div>
        </>
    )

}

export default Task