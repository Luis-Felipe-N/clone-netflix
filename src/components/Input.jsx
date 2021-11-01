import { useState } from "react"

export function Input({value}) {
    const [ inputState, setInputState ] = useState(value)
    return (
        <input type="text" onChange={({target}) => setInputState(target.value)} value={inputState} />
    )
}