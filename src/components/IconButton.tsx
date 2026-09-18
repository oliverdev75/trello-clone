import Icon from "./Icon"

interface Props {
    icon: string,
    onClick: () => void,
    className?: string
}

function IconButton ({ icon, onClick, className }: Props) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center hover:cursor-pointer${className && ` ${className}`}`}
        >
            <Icon>{icon}</Icon>
        </button>
    )
}

export default IconButton