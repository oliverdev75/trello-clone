import { useContext } from "react"
import ListContext from "../contexts/ListContext"

const useListContext = () => useContext(ListContext)

export default useListContext