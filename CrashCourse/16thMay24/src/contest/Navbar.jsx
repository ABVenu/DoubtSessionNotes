import React from 'react';

const Navbar = ({ themeStyles, commonStyles }) => {
  return (
    <nav style={{ ...themeStyles, ...commonStyles, padding: '10px' }}>
      <h1>Navbar</h1>
    </nav>
  );
};

export default Navbar;