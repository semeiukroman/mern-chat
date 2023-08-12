import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext.jsx';

export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogginOrRegister, setIsLogginOrRegister] = useState('register');
    const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

    async function register(ev) {
        ev.preventDefault();
        const url = isLogginOrRegister === 'register' ? 'register' : 'login';
        const { data } = await axios.post(url, { username, password });
        setLoggedInUsername(username);
        setId(data.id);
    }

    return (
        <div className='bg-blue-100 h-screen flex items-center'>
            <form className='w-64 mx-auto' onSubmit={register}>
                <input
                    value={username}
                    onChange={(ev) => setUsername(ev.target.value)}
                    type='text'
                    placeholder='username'
                    className='block w-full rounded-sm p-2 mb-2'
                />

                <input
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    type='password'
                    placeholder='password'
                    className='block w-full rounded-sm p-2 mb-2'
                />
                <button className='bg-blue-500 text-white block w-full rounded-sm p-2'>
                    {isLogginOrRegister === 'register' ? 'Register' : 'Login'}
                </button>

                <div className='text-center mt-2'>
                    {isLogginOrRegister === 'register' && (
                        <div>
                            Already a member?
                            <button
                                onClick={() => setIsLogginOrRegister('login')}
                            >
                                Login here
                            </button>
                        </div>
                    )}
                    {isLogginOrRegister === 'login' && (
                        <div>
                            Dont have an account?
                            <button
                                onClick={() =>
                                    setIsLogginOrRegister('register')
                                }
                            >
                                Register here
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}
