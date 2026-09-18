import List from './components/List'
import useListContext from './hooks/useListContext'

function App() {
  const { todoList } = useListContext()

  return (
    <>
      <List {...todoList} />
    </>
  )
}

export default App
