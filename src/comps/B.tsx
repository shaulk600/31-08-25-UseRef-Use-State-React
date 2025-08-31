import { useRef } from 'react'

export default function B() {
    const inputRef = useRef(null);
    // inputRef.current.value 
    function c() {
        console.log(inputRef.current);
    }



    return (
        <>
            <div className='divPage'>
                <input ref={inputRef.current.value} type='text' />
                <button onClick={c()}></button>
            </div>
        </>
    )
}
