import { useState } from 'react'
import Task from './components/Task'
import List from './components/List'

function App() {
  const [toDoList, setToDoList] = useState([
    {
      id: 1,
      name: "Task 1",
      onDeleteClick: () => {}
    }
  ])
  // const [doingList, setDoingList] = useState([])
  // const [doneList, setDoneList] = useState([])

  const deleteTask = (id: number) => {
    const tmpList = [...toDoList]
    tmpList.
  }

  return (
    <>
      <List id={1} name="Title" tasksList={toDoList} />
    </>
  )
}

export default App
