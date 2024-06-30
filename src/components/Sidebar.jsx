import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemText';
import ListItemText from '@mui/material/ListItemText';
import Hamburger from 'hamburger-react';
import { useScale } from '../context/ScaleContext';

export default function SwipeableTemporaryDrawer() {
  const [isOpen, setOpen] = useState(false);
  const { handleMouseEnter, handleMouseLeave } = useScale();
  const [facebookColor, setFacebookColor] = useState(false);
  const [instagramColor, setInstagramColor] = useState(false);
  const [xColor, setXColor] = useState(false);
  const [youtubeColor, setYoutubeColor] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: '20rem' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
    <List
      sx={{
        padding: '2rem',
        fontFamily: 'Kanit, sans-serif',
      }}
    >
    <div className="sidebar h-[90vh] flex flex-col justify-between">
      <div className="sidebar-options-container">
        {
          ['Home', 'About'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemText primary={text}/> */}
                <ListItemText>
                    <div className="sidebar-options h-[2.5rem] my-2 overflow-hidden text-gray-400 hover:text-black">
                      <h4 
                      className='text-[2rem] cursor-pointer' 
                      style={{fontFamily: '"Kanit", sans-serif'}} 
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      >{text}</h4>
                      <h4 
                      className='text-[2rem] cursor-pointer' 
                      style={{fontFamily: '"Kanit", sans-serif'}}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      >{text}</h4>
                    </div>
                </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </div>
      <div className='sidebar-social'>
        <h3 className='text-gray-500 font-light text-2xl' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Social</h3>
        <div className="social-links flex gap-3 py-5">
          <div className='facebook' onMouseEnter={() => setFacebookColor(true)} onMouseLeave={() => setFacebookColor(false)}>
          {
            facebookColor ? <img className='w-[2rem]' src="../assets/facebook-color.png" alt="" /> : <img className='w-[2rem]' src="../assets/facebook.jpeg" alt="" />
          }
          </div>
          <div className='instagram' onMouseEnter={() => setInstagramColor(true)} onMouseLeave={() => setInstagramColor(false)}>
          {
            instagramColor ? <img className='w-[2rem]' src="../assets/instagram-color.png" alt="" /> : <img className='w-[2rem]' src="../assets/instagram.jpeg" alt="" />
          }
          </div>
          <div className='x transform scale-[2.3]' onMouseEnter={() => setXColor(true)} onMouseLeave={() => setXColor(false)}>
          {
            xColor ? <img className='w-[2rem]' src="../assets/x-color.png" alt="" /> : <img className='w-[2rem]' src="../assets/x.png" alt="" />
          }
          </div>
          <div className='youtube' onMouseEnter={() => setYoutubeColor(true)} onMouseLeave={() => setYoutubeColor(false)}>
          {
            youtubeColor ? <img className='w-[2rem]' src="../assets/youtube-color.png" alt="" /> : <img className='w-[2rem]' src="../assets/youtube.png" alt="" />
          }
          </div>
        </div>
      </div>
    </div>
    </List>
      {/* <Divider /> */}
    </Box>
  );

  return (
    <div>
      <Button sx={{color: 'black', zIndex: 1201}} onClick={isOpen ? toggleDrawer(false) : toggleDrawer(true)}>
        <div className='hamburger'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </Button>
      <SwipeableDrawer
        anchor='right'
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}