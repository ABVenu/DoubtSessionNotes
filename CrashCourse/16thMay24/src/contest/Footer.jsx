import React from 'react';

const Footer = ({ themeStyles, commonStyles }) => {
  return (
    <footer style={{ ...themeStyles, ...commonStyles, padding: '10px', position: 'fixed', width: '100%', bottom: 0 }}>
      <p>Footer</p>
    </footer>
  );
};

export default Footer;