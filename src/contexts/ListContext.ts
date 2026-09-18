import { createContext } from "react";
import type { ListProps, TaskProps } from "../types";

interface Props {
    todoList: ListProps,
    updateTodoTasksList: (list: TaskProps[]) => void
}

const ListContext = createContext<Props>({} as Props)

export default ListContext