'use client'


import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Toast = () => {
  useEffect(() => {

    toast('Welcome To OAUmart🤗.', {
      style: {
        background: '#ffeeba',
        color: '#000', 
      },
      duration: 3000,
      position: 'top-left',
    });
  }, []);

  return (
    <div>

      <Toaster />
    </div>
  );
};

export default Toast;
