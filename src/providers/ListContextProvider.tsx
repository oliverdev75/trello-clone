import { useState, type ReactNode } from "react"
import ListContext from "../contexts/ListContext"
import type { ListProps, TaskProps } from "../types"

interface Props {
    children: ReactNode
}

function ListContextProvider ({ children }: Props) {

    const [todoList, setTodoList] = useState<ListProps>({
        id: 1,
        name: "To do",
        tasksList: [
            {
                id: 1,
                name: "Task 1",
            },
            {
                id: 2,
                name: "Task 2",
            },
            {
                id: 3,
                name: "Task 3",
            },
        ]
    })
    // const [doingList, setDoingList] = useState([])
    // const [doneList, setDoneList] = useState([])

    const updateTodoTasksList = (list: TaskProps[]) => setTodoList({ ...todoList, tasksList: list})

    return (
        <ListContext.Provider value={{ todoList, updateTodoTasksList }}>
            {children}
        </ListContext.Provider>
    )
}

export default ListContextProvider