import { useRef, useEffect, type ChangeEvent, type KeyboardEvent } from "react"

interface Props {
    focus: boolean
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onBlur: () => void,
    onEnter: () => void
}

function TaskInput ({ focus, value, onChange, onBlur, onEnter }: Props) {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        focus && ref.current && ref.current.focus()
    }, [focus])

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            onEnter()
        } else if (e.key === "Esc" || e.key === "Escape") {
            onBlur()
        }
    }

    return (
        <div className="flex w-60 px-4 py-2 bg-gray-200 rounded-lg justify-between items-center">
            <input
                ref={ref}
                value={value}
                onChange={e => onChange(e)}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                placeholder="Task name..."
                type="text"
                className="border-0 focus:outline-0"
            />
        </div>
    )
}

export default TaskInput