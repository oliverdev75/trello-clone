import useListContext from "./useListContext"

function useTask() {
    const { todoList, updateTodoTasksList } = useListContext()

    const deleteTask = (id: number) => {
        updateTodoTasksList([...todoList.tasksList.filter(task => task.id !== id)])
    }

    return {
        todoList,
        deleteTask
    }
}

export default useTask