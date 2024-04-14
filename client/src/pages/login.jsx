import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import homeBKG from '../assets/artboard-studio.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            navigate('/dashboard');
        } else {
            console.log('error');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100 bg-cover" style={{ backgroundImage: `url(${homeBKG})` }}>
            <div className="bg-white p-20 rounded-lg shadow-md text-center">
                <h1 className="text-4xl mb-4 text-green-800">Login</h1>
                <form onSubmit={onSubmit}>
                    <input
                        className="block border border-grey-light w-full p-3 rounded mb-4" 
                        name="email" value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="Email" required />
                    <input
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password" type="password" value={password} onChange={e => setPassword(e.target.value)}
                        placeholder="Password" required />
                    <button type="submit" className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;