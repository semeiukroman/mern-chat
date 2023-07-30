export default function Avatar({ userId, username }) {
    const colors = [
        'bg-teal-200',
        'bg-red-200',
        'bg-green-200',
        'bg-purple-200',
        'bg-blue-200',
        'bg-yellow-200',
        'bg-orange-200',
        'bg-pink-200',
        'bg-fuchsia-200',
        'bg-rose-200',
    ];
    const userIDbase10 = parseInt(userId, 16);
    const colorIndex = userIDbase10 % colors.length;
    const color = colors[colorIndex];

    return (
        <div className={'w-8 h-8 rounded-full flex items-center ' + color}>
            <div className='w-full text-center font-bold opacity-70'>
                {username[0]}
            </div>
        </div>
    );
}
