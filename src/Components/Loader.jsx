import React from 'react';

export const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img className="h-20 w-20" src="/public/loader.gif" alt="Loading..."  />
    </div>
  );
};
