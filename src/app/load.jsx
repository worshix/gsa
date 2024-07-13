import React from 'react';

const Loading = () => {
  return (
    <main className='h-screen bg-main-300'>
      <svg viewBox='0 0 600 160' className="loader-svg pt-[25vh]">
        <text x="30%" y="50%" dy=".32em" textAnchor='middle' className='loader-body-g'>
          G
        </text>
        <text x="50%" y="50%" dy=".32em" textAnchor='middle' className='loader-body-s'>
          S
        </text>
        <text x="70%" y="50%" dy=".32em" textAnchor='middle' className='loader-body-a'>
          A
        </text>
      </svg>
      <h1 className='font-extrabold text-white w-fit mx-auto mt-[5vh] animate-pulse'>Loading...</h1>
    </main>
  )
}

export default Loading

