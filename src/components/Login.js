import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import key from '../photos/next.png';
import user from '../photos/user.png';
import passwordIcon from '../photos/padlock.png';

export default function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const navigate = useNavigate();

    const extractNameFromEmail = (email) => {
        return email.substring(0, email.indexOf('@'));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        console.log('Submitting login form...');
        setIsButtonDisabled(true);

        try {
            const response = await axios.post('https://hr-backend-talo.com/api/login', formData);

            if (response.status === 200) {
                const token = response.data.response.token;
                console.log(token);
                localStorage.setItem('token', token);
                const name = extractNameFromEmail(email);
                console.log(response);
                navigate("/dashboard", { state: { userName: name } });
                toast.success('Login Successful!');
            }
        } catch (error) {
            toast.error('Login Failed! Please check your credentials.');
        } finally {
            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 10000);
        }

    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme==='dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const isFormValid = email !== '' && password !== '';

    return (
        <div className={`flex items-center justify-center h-screen ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-200'}`}>
            <form className='bg-gradient-to-br from-gray-300 to-teal-600 bg-opacity-75 px-20 py-20 rounded-3xl border-2 border-gray-200' onSubmit={handleSubmit}>
                <div className="relative mb-4">
                    <img src={key} alt="Key" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-16 h-16" />
                    <h1 className="left-1/2 pl-24 text-white text-6xl font-semibold">Login</h1>
                </div>
                <p className='font-medium text-lg text-gray-100 pt-2'>Welcome back! Please enter your details.</p>
                <div className='mt-6'>
                    <div className="relative">
                        <label className="text-gray-100 text-xl font-medium">Email</label>
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='text-gray-100 text-l w-full border-2 border-gray-100 rounded-xl p-4 mt-1 pl-12 bg-transparent placeholder-gray-100'
                            placeholder='Enter your email'
                        />
                        <img src={user} alt="User" className="absolute top-1/2 transform -translate-y-1/6 right-4 w-8 h-8" />
                    </div>
                    <div className="relative mt-5">
                        <label className="text-gray-100 text-xl font-medium">Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 pl-12 bg-transparent placeholder-gray-100'
                            placeholder='Enter your password'
                        />
                        <img src={passwordIcon} alt="Password" className="absolute top-1/2 transform -translate-y-1/6 right-4 w-8 h-8" />
                    </div>
                    <div className='mt-8 flex flex-col'>
                        <button
                            type='submit'
                            className={`py-4 rounded-xl text-lg font-bold w-full ${isFormValid ? 'bg-teal-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                            disabled={!isFormValid || isButtonDisabled}>
                            Login
                        </button>
                        {error && <p>{error}</p>}
                    </div>
                </div>
            </form>
            <button
                className={`absolute top-4 right-4 w-12 h-6 rounded-full bg-gray-300 flex items-center justify-between p-1 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'}`}
                onClick={toggleTheme}
            >
                <div className={`w-6 h-6 rounded-full shadow-md transform ${theme === 'light' ? 'translate-x-0 bg-gray-700' : 'translate-x-full bg-gray-300'}`} />
            </button>
        </div>
    );
}
