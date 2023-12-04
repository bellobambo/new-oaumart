import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center info w-full py-4">
        <hr className=''/>
      <p>&copy; {currentYear} OAU Market². All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
