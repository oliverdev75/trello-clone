import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}

function Icon ({ children }: Props) {
    return (
        <i className="material-symbols-rounded">
            {children}
        </i>
    )
}

export default Icon