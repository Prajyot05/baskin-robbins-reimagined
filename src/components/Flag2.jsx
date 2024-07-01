import React, { useState, useEffect, useRef } from 'react';

const styles = {
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transform: 'scale(0.8)',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: 'rgb(152, 152, 152)',
  },
  menu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '8px',
    borderRadius: '6px',
    minWidth: '180px',
    backgroundColor: '#fff',
    color: 'rgb(55, 65, 81)',
    boxShadow: '0px 0px 0px 0px rgba(255, 255, 255, 1), 0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    zIndex: 1,
  },
  menuItem: {
    padding: '8px 16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    color: 'rgb(55, 65, 81)',
  },
  menuItemHover: {
    backgroundColor: 'rgba(25, 118, 210, 0.08)',
  },
};

export default function Flag() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !anchorEl.contains(event.target)) {
        handleClose();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, anchorEl]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        id="demo-customized-button"
        aria-controls={isMenuOpen ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? 'true' : undefined}
        onClick={handleClick}
        style={{ ...styles.button, ':hover': styles.buttonHover }}
      >
        <img src="../assets/three-dots-vertical.svg" alt="" />
      </button>
      {isMenuOpen && (
        <div ref={menuRef} style={styles.menu}>
          <div
            onClick={handleClose}
            style={{ ...styles.menuItem, ':hover': styles.menuItemHover }}
          >
            Flag as inappropriate
          </div>
          <div
            onClick={handleClose}
            style={{ ...styles.menuItem, ':hover': styles.menuItemHover }}
          >
            Flag as Spam
          </div>
        </div>
      )}
    </div>
  );
}