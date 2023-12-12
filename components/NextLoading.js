import React from 'react';
import NextTopLoader from 'nextjs-toploader';

const NextLoading = () => {
  console.log('NextLoading component is rendering...');

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10">
        <NextTopLoader color='#FFFF99' />
      </div>
    </div>
  );
};

export default NextLoading;
