import { useRef } from 'react';

const UncontrolledInput = () => {
    const inputRef = useRef(null);
    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
    }
    return (
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <label className='text-gray-200 py-2'>UnControlled Input</label>
            <input className='px-2 text-gray-800' ref={inputRef} type="text" />
        </form>
    );
}

export default UncontrolledInput;  
