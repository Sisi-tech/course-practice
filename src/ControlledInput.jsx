import { useState } from 'react';

const ControlledInput = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <form>
            <input value={value} onChange={handleChange} type="text" />
            <table>
                <tbody className='text-gray-200 flex flex-col'>
                    <td>Controlled input features</td>
                    <td>One-time value retrieval</td>
                    <td>Validating on submit</td>
                    <td>Instant field validation</td>
                    <td>Conditionally disabling a submit button</td>
                    <td>Enforcing a specific input format</td>
                    <td>Several inputs for one piece of data</td>
                    <td>Dynamic inputs</td>
                </tbody>
            </table>
        </form>
        
    )
}

export default ControlledInput;