import { useState } from 'react';

export default function InputComponent() {
    const [name, setName] = useState('');
    const handleNameChange = (e) => {
        let value = e.target.value;
        let firstChar = value.length > 0 ? value[0].toUpperCase() : '';
        let restChar = value.slice(1,);
        setName(firstChar + restChar);
    }
    return (
        <div className='text-gray-100 py-2 flex flex-col justify-center align-center' style={{lineHeight: "2.0"}}>
            <h2 className='text-blue-700' style={{textDecoration: 'underline'}}>Practice - Using Hooks</h2>
            <p>Happy Thanksgiving {name}</p>
            <input className='block text-black px-2' value={name} onChange={handleNameChange} />
            <button className='bg-blue-600 text-gray-200 rounded-md px-2 m-3 w-24 shadow-gray-600 shadow-md hover:bg-gray-200 hover:text-black' onClick={()=>setName("")}>
                Reset
            </button>
        </div>
    );
}
