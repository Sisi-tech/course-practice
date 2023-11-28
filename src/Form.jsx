import { useState } from 'react';

const ControlledForm = () => {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        alert("Form has been submitted!")
        console.log('Form submitted')
    }
    return (
        <div className='text-gray-200'>
            <form  onSubmit={handleSubmit}>
                <fieldset className='flex flex-col justify-center align-center'>
                    <div className='bg-gray-600 p-8 m-6'>
                        <label className='p-2' htmlFor='name'>Name:</label>
                        <input className='px-2 text-gray-800' id="name" type="text" name="name" placeholder='Name' value={name} onChange={e=>setName(e.target.value)} />
                    </div>
                    <button className='bg-gray-500 px-2 m-4' disabled={!name}>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default ControlledForm;