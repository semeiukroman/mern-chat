import { useEffect, useState } from 'react';

export default function Chat() {
    const [ws, setWs] = useState(null);
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:4040');
        setWs(ws);
        ws.addEventListener('message', handleMessage);
    }, []);
    function handleMessage(e) {
        console.log('new message', e);
    }
    return (
        <div className='flex h-screen'>
            <div className='bg-white-100 w-1/3'>Contacts</div>

            <div className='flex flex-col bg-blue-100 w-2/3 p-10'>
                <div className='flex-grow'>messages with selected person</div>
                <div className='flex gap-2'>
                    <input
                        type='text'
                        placeholder='Type your message here'
                        className='bg-white flex-grow border rounded-sm p-2'
                    />
                    <button className='bg-blue-500 rounded-sm p-2 text-white'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='w-5 h-5'
                        >
                            <path d='M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z' />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
