import useListContext from "./useListContext"

function useTask() {
    const { todoList, updateTodoTasksList } = useListContext()

    const deleteTask = (id: number) => {
        const tmpList = [...todoList.tasksList.filter(task => task.id !== id)]
        // const initialElementIndex = tmpList.findIndex(value => value.id === id)
        // let tmpElement
        // if (initialElementIndex < tmpList.length - 1) {
        //     for (let i = initialElementIndex; i < tmpList.length; i++) {
        //         tmpElement = tmpList[i]
        //         tmpList[i] = tmpList[i + 1]
        //         tmpList[i + 1] = tmpElement
        //         if (i + 1 === tmpList.length - 1) {
        //             break
        //         }
        //     }
        // }
            
        //tmpList.pop()
        updateTodoTasksList([...tmpList])
    }

    return {
        todoList,
        deleteTask
    }
}

export default useTask