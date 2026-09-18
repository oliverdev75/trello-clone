import useListContext from "./useListContext"

function useTask() {
    const { todoList, updateTodoTasksList } = useListContext()

    const updateTask = (id: number, newName: string) => {
        updateTodoTasksList([...todoList.tasksList.map(task => {
            if (task.id === id) {
                task.name = newName
            }

            return task
        })])
    }

    const deleteTask = (id: number) => {
        updateTodoTasksList([...todoList.tasksList.filter(task => task.id !== id)])
    }

    return {
        todoList,
        updateTask,
        deleteTask
    }
}

export default useTask