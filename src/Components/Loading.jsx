import React from 'react';

const Loading = () => {
    return (
        <div className='bg-black fixed top-0 bg-opacity-10 left-0 w-screen gap-3 h-screen flex justify-center items-center'>
            <div className='bg-white rounded-full animate-bounce w-5 h-5'></div>
            <div className='bg-white rounded-full animate-bounce w-5 h-5'></div>
            <div className='bg-white rounded-full animate-bounce w-5 h-5'></div>
        </div>
    );
}

export default Loading;