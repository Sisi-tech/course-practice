import { useState } from 'react';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        value: '',
        isTouched: false,
    });
    const [role, setRole] = useState('Role');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName && !lastName && !email && !password && !role) {
            alert("please complete all required information.")
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setRole('Role');
    }
    
    return (
        <form className='text-gray-200 border p-8 border-white py-10'>
            <fieldset className='flex flex-col align-center justify-center gap-4'>
                <h2 className='text-center'>Sign Up</h2>
                <div className='flex flex-col'>
                    <label htmlFor='firstName'>First name <sum>* </sum></label>
                    <input 
                        className='w-[400px] px-2 text-gray-800' 
                        id="firstName"
                        type='text' 
                        placeholder='First name' 
                        value={firstName}
                        onChange={e=>setFirstName(e.target.value)}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='lastName'>Last name <sum>* </sum></label>
                    <input 
                        className='w-[400px] px-2 text-gray-800' 
                        type="text" 
                        placeholder='Last name' 
                        id="lastName"
                        value={lastName}
                        onChange={e=>setLastName(e.target.value)}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='email'>Email address <sum>* </sum></label>
                    <input 
                        className='w-[400px] px-2 text-gray-800' 
                        type="email" 
                        placeholder='Email' 
                        id="email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='password'>Password <sum>* </sum></label>
                    <input 
                        className='w-[400px] px-2 text-gray-800' 
                        type="password" 
                        placeholder='Password'
                        id="password" 
                        value={password.value}
                        onChange={e=>setPassword({...password, value: e.target.value})}
                    />
                    { (password.length <= 8) && (
                        <p className='text-red-600'>Password should have at least 8 characters.</p>
                    )}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='role'>Role <sum>* </sum></label>
                    <input 
                        className='w-[400px] px-2 text-gray-800' 
                        type="text" 
                        placeholder='Role' 
                        id="role"
                        value={role}
                        onChange={e=>setRole(e.target.value)}
                    />
                </div>
                <button className='bg-blue-700 text-gray-200 mt-4' type="submit">Create Account</button>
            </fieldset>
        </form>
    )
}

export default Registration;
