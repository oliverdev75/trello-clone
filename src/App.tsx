import { useEffect } from 'react'
import List from './components/List'
import useListContext from './hooks/useListContext'

function App() {
  const { todoList } = useListContext()

  useEffect(() => console.log(todoList), [todoList])

  return (
    <>
      <List {...todoList} />
    </>
  )
}

export default App
