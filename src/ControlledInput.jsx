import { useState } from 'react';

const ControlledInput = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <form>
            <input value={value} onChange={handleChange} type="text" />
        </form>
    )
}

export default ControlledInput;