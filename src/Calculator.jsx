import { useState, useRef } from 'react'

const Calculator = () => {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const plus = (e) => {
        e.preventDefault();
        setResult(result=>result + Number(inputRef.current.value));
    }
    const minus = (e) => {
        e.preventDefault();
        setResult((result)=>result - Number(inputRef.current.value));
    }
    const times = (e) => {
        e.preventDefault();
        setResult((result)=> result * Number(inputRef.current.value));
    }
    const divide = (e) => {
        e.preventDefault();
        setResult((result)=> result / Number(inputRef.current.value));
    }
    const resetInput = (e) => {
        e.preventDefault();
        inputRef.current.value = '';
    }
    const resetResult = (e) => {
        e.preventDefault();
        setResult(0);
    }

    return (
        <div className='text-gray-200 flex flex-col'>
            <div>
                <h1>Simplest Calculator</h1>
            </div>
            <form className='flex flex-col'>
                <p ref={inputRef}>{result}</p>
                <input className='text-gray-900 px-2' pattern='[0-9]' ref={inputRef} type="number" placeholder='Type a number' />
                <div className='grid grid-cols-2'>
                    <button className='bg-orange-600 rounded-lg m-2 p-1' onClick={plus}>Add</button>
                    <button className='bg-orange-600 rounded-lg m-2 p-1'  onClick={minus}>Minus</button>
                    <button className='bg-orange-600 rounded-lg m-2 p-1' onClick={times}>Multiply</button>
                    <button className='bg-orange-600 rounded-lg m-2 p-1' onClick={divide}>Divide</button>
                    <button className='bg-orange-600 rounded-lg m-2 p-1' onClick={resetInput}>Reset Input</button>
                    <button className='bg-orange-600 rounded-lg m-2 p-1' onClick={resetResult}>ResetResult</button>
                </div>
            </form>
        </div>
    )
}

export default Calculator;