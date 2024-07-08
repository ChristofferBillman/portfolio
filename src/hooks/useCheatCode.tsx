import {useEffect, useState} from 'react'

/**
 * Returns a boolean state variable. If the given keys has been pressed in order,
 * the state returned from this hook will we toggled I.e. entering the sequence
 * of keys toggles the state. Initial value is false.
 * @param keys The sequence of keys to press to enable/disable cheat.
 * @returns Boolean state variable, indicating whether the sequence of keys entered has been entered.
 */
export default function useCheatCode(keys: string[]) {
    const [enabled, setEnabled] = useState(false)
    const [pressedKeys, setPressedKeys] = useState<string[]>([])

    useEffect(() => {
        const onPress = (e: KeyboardEvent) => {
            // If a key that is not part of the cheat code is entered,
            // we know that this can't be a valid cheat code. Reset pressed keys.
            if(!keys.includes(e.key)) {
                setPressedKeys([])
            }
            setPressedKeys(prevState => [...prevState, e.key])

            if(hasSubArray(pressedKeys, keys)) {
                // When cheat has been enabled, empty the array of pressed keys, since
                // the next keypress should not disable the cheat again.
                setPressedKeys([])
                setEnabled(prevState => !prevState )
            }
        }

        window.addEventListener('keypress', onPress)
        return () => window.removeEventListener('keypress', onPress)
    }, [keys, pressedKeys])

    return enabled
}

function hasSubArray(master, sub) {
    return master.join(',').includes(sub.join(','))
}
